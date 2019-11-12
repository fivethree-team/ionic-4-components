import { FivGalleryToolbar } from './gallery-toolbar/gallery-toolbar.component';
import { IonSlides, DomController, Platform } from '@ionic/angular';
import { FivOverlay } from './../overlay/overlay.component';
import {
  Component,
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
  RectPosition,
  fromToPixels,
  easeOutSine
} from '@fivethree/ngx-rxjs-animations';
import { fade } from '../animations/animations';
import { ImageService } from './image.service';

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
export class FivGallery implements AfterContentInit, OnDestroy, Navigateable {
  @ViewChild('overlay', { static: false }) overlay: FivOverlay;
  @ViewChild('morphOverlay', { static: false }) morphOverlay: FivOverlay;
  @ViewChild('viewer', { static: false }) viewer: ElementRef;
  @ViewChild('morph', { static: false }) morphImage: ElementRef;
  @ViewChild('slider', { static: false, read: ElementRef }) swiper: ElementRef;
  @ViewChild('slider', { static: false }) slides: IonSlides;
  @ViewChildren('slideImage') slideImages: QueryList<ElementRef>;

  @ContentChildren(
    forwardRef(() => FivGalleryImage),
    { descendants: true }
  )
  images: QueryList<FivGalleryImage>;
  @ContentChildren(FivGalleryToolbar) toolbars: QueryList<FivGalleryToolbar>;

  topToolbar: TemplateRef<any>;
  bottomToolbar: TemplateRef<any>;

  // properties for the slides
  initialImage: FivGalleryImage;
  activeIndex = 0;
  inFullscreen = false;
  zoomedIn = false;
  controlsVisible = true;
  slidesLoaded = false;
  morphing = false;
  backdrop = false;
  backdropColor = '#000000ee';

  @Input() pagerVisible = true;
  @Input() ambient = false;

  @Output() willOpen = new EventEmitter<FivGalleryImage>();
  @Output() willClose = new EventEmitter<FivGalleryImage>();
  @Output() didOpen = new EventEmitter<FivGalleryImage>();
  @Output() didClose = new EventEmitter<FivGalleryImage>();
  @Output() backdropChange = new EventEmitter<FivGalleryImage>();

  $onDestroy = new Subject();

  constructor(
    private domCtrl: DomController,
    private renderer: Renderer2,
    private animation: AnimationBuilder,
    private change: ChangeDetectorRef,
    private platform: Platform,
    private imageService: ImageService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngAfterContentInit(): void {
    this.updateImagesIndex();
    this.setupToolbars();
    this.subscribeToImageEvents();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  subscribeToImageEvents() {
    from(this.images.map(image => image.click))
      .pipe(
        mergeMap((value: EventEmitter<FivGalleryImage>) => value),
        takeUntil<FivGalleryImage>(this.$onDestroy)
      )
      .subscribe(image => {
        this.open(image);
      });
  }

  updateImagesIndex() {
    this.images.forEach((img, i) => {
      img.index = i;
    });
  }

  setupToolbars() {
    this.toolbars.forEach(toolbar => {
      if (toolbar.position === 'top') {
        this.topToolbar = toolbar.content;
      } else {
        this.bottomToolbar = toolbar.content;
      }
    });
  }

  open(initial: FivGalleryImage) {
    this.willOpen.emit(initial);
    this.activeIndex = initial.index;
    this.morphing = true;
    this.overlay.show(50000);
    this.initialImage = initial;
    this.updateBackdrop(this.activeIndex);
    this.initialImage.originalSrc = initial.src;
    setTimeout(() => {
      //wait a little for ripple
      this.backdrop = true;
      this.showControls();
      this.morphIn();
    }, 300);
  }

  morphIn() {
    this.morphOverlay.show(49999);
    const f = getPosition(this.initialImage.thumbnail);
    const t = this.calculateImagePosition();
    const tweenDone = new Subject();
    tween(easeOutSine, 320)
      .pipe(
        fromToPixels(this.morphImage, f.top, t.top, 'top'),
        fromToPixels(this.morphImage, f.left, t.left, 'left'),
        fromToPixels(this.morphImage, f.height, t.height, 'height'),
        fromToPixels(this.morphImage, f.width, t.width, 'width')
      )
      .subscribe({
        complete: () => {
          tweenDone.next();
        }
      });

    zip(tweenDone, !this.slidesLoaded ? this.slides.ionSlidesDidLoad : of(true))
      .pipe(
        tap(() => {
          this.morphing = false;
          this.morphOverlay.hide();
          this.didOpen.emit(this.initialImage);
          this.swiper.nativeElement.swiper.on('click', () => {
            this.handleSingleTap();
          });
        }),
        takeUntil(this.$onDestroy)
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
    this.resetSlides(0);
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
        fromToPixels(this.morphImage, f.top, t.top, 'top'),
        fromToPixels(this.morphImage, f.left, t.left, 'left'),
        fromToPixels(this.morphImage, f.height, t.height, 'height'),
        fromToPixels(this.morphImage, f.width, t.width, 'width')
      )
      .subscribe({
        complete: () => {
          this.morphOverlay.hide();
          this.didClose.emit(this.initialImage);
          this.initialImage = null;
        }
      });
  }

  slideOut() {
    this.overlay.hide();
    this.morphOverlay.show();
    this.morphImage.nativeElement.src = this.getActiveImage().nativeElement.src;
    setPosition(this.morphImage, getPosition(this.getActiveImage()));
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
          this.initialImage = null;
        }
      });
  }

  getActiveImage() {
    return this.slideImages.toArray()[this.activeIndex];
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

  updateBackdrop(index: number) {
    this.backdropColor = this.ambient
      ? this.imageService.getAverageRGB(
          this.images.toArray()[index].thumbnail.nativeElement
        )
      : '#000000ee';

    this.backdropChange.emit();
  }

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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.slidesLoaded && !this.morphing) {
      this.handleKeyboardEvents(event);
    }
  }

  handleKeyboardEvents(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next();
      return;
    }
    if (event.key === 'ArrowLeft') {
      this.prev();
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'Escape') {
      this.close();
      return;
    }
  }

  next() {
    if (this.slides && this.slidesLoaded) {
      this.slides.slideNext();
    }
  }
  prev() {
    if (this.slides && this.slidesLoaded) {
      this.slides.slidePrev();
    }
  }
}

export class Position {
  top: number;
  left: number;
  height: number;
  width: number;
  translate?: number;
}
