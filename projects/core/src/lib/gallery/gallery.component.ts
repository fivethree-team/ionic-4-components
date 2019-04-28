import { FivGalleryToolbar } from './gallery-toolbar/gallery-toolbar.component';
import { FivGalleryImage, Position } from './gallery-image/gallery-image.component';
import { ImageService } from './image.service';
import { IonSlides, DomController, Platform } from '@ionic/angular';
import { FivOverlay } from './../overlay/overlay.component';
import {
  Component, OnInit, ViewChild, ElementRef, Renderer2,
  ContentChildren, QueryList, AfterContentInit, forwardRef, HostListener, Inject, ChangeDetectorRef, TemplateRef, ViewChildren, Input
} from '@angular/core';
import { style, animate, AnimationBuilder, trigger, transition } from '@angular/animations';
import { Key } from './keycodes.enum';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'fiv-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('scale', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('125ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition('* => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('125ms', style({ opacity: 0, transform: 'scale(0)' }))
      ])
    ]),
    trigger('slideUp', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('125ms', style({ opacity: 1, transform: 'translateY(0%)' }))
      ]),
      transition('* => void', [
        style({ opacity: 1, transform: 'translateY(0%)' }),
        animate('125ms', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('slideDown', [
      transition('* => void', [
        style({ opacity: 0, transform: 'translateY(0%)' }),
        animate('125ms', style({ opacity: 1, transform: 'translateY(-100%)' }))
      ]),
      transition('void => *', [
        style({ opacity: 1, transform: 'translateY(-100%)' }),
        animate('125ms', style({ opacity: 0, transform: 'translateY(0%)' }))
      ])
    ])
  ]
})
export class FivGallery implements OnInit, AfterContentInit {

  @ViewChild('overlay') overlay: FivOverlay;
  @ViewChild('viewer') viewer: ElementRef;
  @ViewChild('slider', { read: ElementRef }) swiper: ElementRef;
  @ViewChild('slider') slides: IonSlides;

  @ContentChildren(forwardRef(() => FivGalleryImage), { descendants: true }) images: QueryList<FivGalleryImage>;
  @ContentChildren(FivGalleryToolbar) toolbars: QueryList<FivGalleryToolbar>;

  topToolbar: TemplateRef<any>;
  bottomToolbar: TemplateRef<any>;

  // properties for the slides
  activeIndex = 0;
  options = {
    zoom: true,
    initialSlide: 0
  };
  initialImage: FivGalleryImage;
  inFullscreen: boolean;
  zoomedIn: boolean;
  controlsVisible = true;
  @Input() pagerVisible = true;
  private slidesLoaded;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.overlay && this.overlay.open && this.initialImage && this.initialImage.viewerState === 'hidden') {
      this.handleKeyboardEvents(event);
    }
  }


  constructor(
    private domCtrl: DomController,
    private renderer: Renderer2,
    private animation: AnimationBuilder,
    private change: ChangeDetectorRef,
    private platform: Platform,
    @Inject(DOCUMENT) private document: any,
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.updateImages();
    this.updateToolbars();
  }

  updateImages() {
    this.images.forEach((img, i) => img.index = i);
  }
  updateToolbars() {
    this.toolbars
      .forEach((toolbar) => {
        if (toolbar.position === 'top') {
          this.topToolbar = toolbar.content;
        } else {
          this.bottomToolbar = toolbar.content;
        }
      });
  }

  handleKeyboardEvents(event: KeyboardEvent) {
    if (event.keyCode === Key.RightArrow) {
      this.next();
      return;
    }
    if (event.keyCode === Key.LeftArrow) {
      this.prev();
      return;
    }
    if (event.keyCode === Key.DownArrow || event.keyCode === Key.Escape) {
      this.close();
      return;
    }
  }

  next() {
    if (this.overlay && this.overlay.open && this.initialImage && this.initialImage.viewerState === 'hidden') {
      this.slides.slideNext();
    }
  }
  prev() {
    if (this.overlay && this.overlay.open && this.initialImage && this.initialImage.viewerState === 'hidden') {
      this.slides.slidePrev();
    }
  }




  open(index: number, initial: FivGalleryImage) {
    this.options.initialSlide = index;
    this.overlay.show(50000);
    this.initialImage = initial;
    this.showControls();
  }

  close() {
    this.closeFromPullDown(0);
  }

  closeFromPullDown(progress: number) {
    this.transformSlides(0);
    const position = this.getImagePosition(this.images.toArray()[this.activeIndex].image, progress);
    this.initialImage.close(position);
    if (this.inFullscreen) {
      this.closeFullscreen();
    }
    this.slidesLoaded = false;
    this.overlay.hide();
  }

  resetPan(progress: number) {
    this.resetSlides(progress);
  }

  private getImagePosition(element: ElementRef, offset: number = 0): Position {
    const bounds = element.nativeElement.getBoundingClientRect();
    return {
      top: bounds.top,
      left: bounds.left,
      height: element.nativeElement.clientHeight,
      width: element.nativeElement.clientWidth,
      translate: this.platform.height() / 2 + offset * 120
    };
  }


  transformSlides(progress: number) {
    if (this.controlsVisible) {
      this.hideControls();
    }
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.viewer.nativeElement, 'transform', `translateY(${progress * 120}px)`);
    });
  }

  resetSlides(progress: number) {
    const reset = this.animation.build([
      style({ transform: `translateY(${progress * 120}px)` }),
      animate('150ms', style({ transform: `translateY(0px)` }))
    ]);

    const animation = reset.create(this.viewer.nativeElement);
    animation.play();
    animation.onDone(() => {
      animation.destroy();
      this.transformSlides(0);
      this.showControls();
    });
  }

  slideDidChange() {
    this.activeIndex = this.swiper.nativeElement.swiper.activeIndex;
  }

  ionSlideNextStart() {
    if (this.slidesLoaded) {
      this.updateBackdrop(this.activeIndex + 1);
    }
  }
  ionSlidePrevStart() {
    if (this.slidesLoaded) {
      this.updateBackdrop(this.activeIndex - 1);
    }
  }

  updateBackdrop(index: number) {
    this.initialImage.backdropColor = this.imageService.getAverageRGB(this.images.toArray()[index].image.nativeElement);
  }

  onSlidesLoad() {
    this.slidesLoaded = true;
    this.activeIndex = this.swiper.nativeElement.swiper.activeIndex;
    this.initialImage.viewerState = 'hidden';
    this.swiper.nativeElement.swiper.on('click', () => {
      this.handleSingleTap();
    });
  }

  fullscreen() {
    if (this.inFullscreen) {
      this.closeFullscreen();
    } else {
      this.openFullscreen();
    }
  }

  openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
      /* Firefox */
      elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
      /* Chrome, Safari and Opera */
      elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
      /* IE/Edge */
      elem['msRequestFullscreen']();
    }
    this.inFullscreen = true;
  }

  closeFullscreen() {
    this.inFullscreen = false;

    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  zoom() {
    if (this.zoomedIn) {
      this.zoomOut();
    } else {
      this.zoomIn();

    }
  }

  zoomIn() {
    this.swiper.nativeElement.swiper.zoom.in();
    this.zoomedIn = true;
  }

  zoomOut() {
    this.swiper.nativeElement.swiper.zoom.out();
    this.zoomedIn = false;
  }

  handleSingleTap() {
    this.controlsVisible = !this.controlsVisible;
    this.change.detectChanges();
  }

  hideControls() {
    this.controlsVisible = false;
    this.change.detectChanges();
  }

  showControls() {
    this.controlsVisible = true;
    this.change.detectChanges();
  }


}
