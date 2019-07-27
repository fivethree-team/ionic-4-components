import { FivGalleryToolbar } from './gallery-toolbar/gallery-toolbar.component';
import { IonSlides, DomController, Platform } from '@ionic/angular';
import { FivOverlay } from './../overlay/overlay.component';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ContentChildren,
  QueryList,
  AfterContentInit,
  forwardRef,
  HostListener,
  Inject,
  ChangeDetectorRef,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChildren
} from '@angular/core';
import {
  style,
  animate,
  AnimationBuilder,
  trigger,
  transition,
  useAnimation
} from '@angular/animations';
import { Key } from './keycodes.enum';
import { DOCUMENT } from '@angular/common';
import { Navigateable } from '../interfaces';
import { FivGalleryImage } from './gallery-image/gallery-image.component';
import { from, Subject, zip, of } from 'rxjs';
import { mergeMap, takeUntil, tap } from 'rxjs/operators';
import {
  tween,
  fromTo,
  getPosition,
  setPosition,
  RectPosition
} from '../animations/tween';
import { easeOutSine } from '../animations/easing-functions';
import { fade } from '../animations/animations';

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
        animate('75ms', style({ opacity: 1, transform: 'translateY(0%)' }))
      ]),
      transition('* => void', [
        style({ opacity: 1, transform: 'translateY(0%)' }),
        animate('75ms', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('slideDown', [
      transition('* => void', [
        style({ opacity: 0, transform: 'translateY(0%)' }),
        animate('75ms', style({ opacity: 1, transform: 'translateY(-100%)' }))
      ]),
      transition('void => *', [
        style({ opacity: 1, transform: 'translateY(-100%)' }),
        animate('75ms', style({ opacity: 0, transform: 'translateY(0%)' }))
      ])
    ]),
    trigger('fade', [
      transition(
        '* => void',
        useAnimation(fade, {
          params: {
            fromOpacity: 1,
            toOpacity: 0,
            time: '240ms'
          }
        })
      ),
      transition(
        'void => *',
        useAnimation(fade, {
          params: {
            fromOpacity: 0,
            toOpacity: 1,
            time: '240ms'
          }
        })
      )
    ])
  ]
})
export class FivGallery
  implements OnInit, AfterContentInit, OnDestroy, Navigateable {
  @ViewChild('overlay') overlay: FivOverlay;
  @ViewChild('morphOverlay') morphOverlay: FivOverlay;
  @ViewChild('viewer') viewer: ElementRef;
  @ViewChild('morph') morphImage: ElementRef;
  @ViewChild('slider', { read: ElementRef }) swiper: ElementRef;
  @ViewChild('slider') slides: IonSlides;
  @ViewChildren('slideImage') slideImages: QueryList<ElementRef>;

  @ContentChildren(forwardRef(() => FivGalleryImage), { descendants: true })
  images: QueryList<FivGalleryImage>;
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
  slidesLoaded = false;
  visible = false;
  backdrop = false;
  @Input() pagerVisible = true;
  @Input() ambient = true;
  @Input() openTiming = '300ms';
  @Input() closeTiming = '340ms';
  @Output() willOpen = new EventEmitter<FivGalleryImage>();
  @Output() willClose = new EventEmitter<FivGalleryImage>();
  @Output() didOpen = new EventEmitter<FivGalleryImage>();
  @Output() didClose = new EventEmitter<FivGalleryImage>();
  @Output() backdropChange = new EventEmitter<FivGalleryImage>();

  $onDestroy = new Subject();

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.overlay && this.overlay.open && this.initialImage) {
      this.handleKeyboardEvents(event);
    }
  }

  constructor(
    private domCtrl: DomController,
    private renderer: Renderer2,
    private animation: AnimationBuilder,
    private change: ChangeDetectorRef,
    private platform: Platform,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.updateImages();
    this.updateToolbars();
    this.subscribeToImageEvents();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  subscribeToImageEvents() {
    from(this.images.map(image => image.willOpen))
      .pipe(
        mergeMap((value: EventEmitter<FivGalleryImage>) => value),
        takeUntil<FivGalleryImage>(this.$onDestroy)
      )
      .subscribe(image => {
        this.willOpen.emit(image);
        this.open(image);
      });
  }

  updateImages() {
    this.images.forEach((img, i) => {
      img.index = i;
    });
  }
  updateToolbars() {
    this.toolbars.forEach(toolbar => {
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
    if (this.overlay && this.overlay.open && this.initialImage) {
      this.slides.slideNext();
    }
  }
  prev() {
    if (this.overlay && this.overlay.open && this.initialImage) {
      this.slides.slidePrev();
    }
  }

  open(initial: FivGalleryImage) {
    this.activeIndex = initial.index;
    this.options.initialSlide = this.activeIndex;
    this.visible = false;
    this.overlay.show(50000);
    this.initialImage = initial;
    this.initialImage.originalSrc = initial.src;
    setTimeout(() => {
      //wait a little for ripple
      this.backdrop = true;
      this.showControls();
      this.morphIn();
    }, 500);
  }

  morphIn() {
    this.morphOverlay.show(49999);
    const f = getPosition(this.initialImage.thumbnail);
    const t = this.calculateImagePosition();
    const tweenDone = new Subject();
    tween(easeOutSine, 320)
      .pipe(
        fromTo(this.morphImage, 'top', f.top, t.top),
        fromTo(this.morphImage, 'left', f.left, t.left),
        fromTo(this.morphImage, 'height', f.height, t.height),
        fromTo(this.morphImage, 'width', f.width, t.width)
      )
      .subscribe({
        complete: () => {
          tweenDone.next();
        }
      });

    zip(tweenDone, !this.slidesLoaded ? this.slides.ionSlidesDidLoad : of(true))
      .pipe(
        tap(() => {
          console.log('VISIBLE');
          this.visible = true;
          this.morphOverlay.hide();
          this.didOpen.emit(this.initialImage);
          this.swiper.nativeElement.swiper.on('click', () => {
            this.handleSingleTap();
          });
        })
      )
      .subscribe();
  }

  dismiss() {
    this.close(false);
  }

  close(emit = true) {
    if (emit) {
      this.willClose.emit(this.initialImage);
    }
    this.backdrop = false;
    const sameAsInitial =
      this.images.toArray()[this.activeIndex].index === this.initialImage.index;
    if (sameAsInitial) {
      this.morphBack();
    } else {
      this.slideOut();
    }
    this.resetPan(0);
    if (this.inFullscreen) {
      this.closeFullscreen();
    }
    this.slidesLoaded = false;
  }

  morphBack() {
    const f = getPosition(this.getActiveImage());
    const t = getPosition(this.initialImage.thumbnail);
    this.overlay.hide();
    this.morphOverlay.show();
    tween(easeOutSine, 240)
      .pipe(
        fromTo(this.morphImage, 'top', f.top, t.top),
        fromTo(this.morphImage, 'left', f.left, t.left),
        fromTo(this.morphImage, 'height', f.height, t.height),
        fromTo(this.morphImage, 'width', f.width, t.width)
      )
      .subscribe({
        complete: () => {
          this.morphOverlay.hide();
          this.didClose.emit(this.initialImage);
        }
      });
  }

  slideOut() {
    const currentImage = this.getActiveImage();
    this.overlay.hide();
    this.morphOverlay.show();
    setPosition(this.morphImage, getPosition(currentImage));
    this.morphImage.nativeElement.src = this.getActiveImage().nativeElement.src;
    tween(easeOutSine, 240)
      .pipe(
        fromTo(
          this.morphImage,
          'transform',
          0,
          100,
          (t: number) => `translateY(${t}%)`
        )
      )
      .subscribe({
        complete: () => {
          this.morphImage.nativeElement.style.transform = '';
          this.morphOverlay.hide();
          this.didClose.emit(this.initialImage);
        }
      });
  }

  getActiveImage() {
    return this.slideImages.toArray()[this.activeIndex];
  }

  resetPan(progress: number) {
    this.resetSlides(progress);
  }

  transformSlides(progress: number) {
    if (this.controlsVisible) {
      this.hideControls();
    }
    this.domCtrl.write(() => {
      this.renderer.setStyle(
        this.viewer.nativeElement,
        'transform',
        `translateY(${progress * 120}px)`
      );
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

  updateBackdrop(index: number) {}

  onSlidesLoad() {
    this.slidesLoaded = true;
  }
  calculateImagePosition(): RectPosition {
    const nH = this.initialImage.thumbnail.nativeElement.naturalHeight;
    const nW = this.initialImage.thumbnail.nativeElement.naturalWidth;
    let height = Math.min(nH, this.platform.height());
    let width = Math.min(nW, this.platform.width());
    const ratio = nW / nH;
    if (ratio * height < width) {
      width = height * ratio;
    } else {
      height = width / ratio;
    }

    const top = this.platform.height() / 2 - height / 2;
    const left = this.platform.width() / 2 - width / 2;
    const p = {
      height: height,
      width: width,
      left: left,
      top: top
    };
    return p;
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

export class Position {
  top: number;
  left: number;
  height: number;
  width: number;
  translate?: number;
}
