import { FivGalleryImage } from '../gallery/gallery-image/gallery-image.component';
import {
  Directive,
  OnInit,
  Input,
  EventEmitter,
  Output,
  Host,
  Self,
  Optional,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[fivLazyImage]'
})
export class FivLazyImage implements OnInit {
  @Input() fivLazyImage: string;
  @Input() virtual = false;
  inViewport = false;
  @Output() willShow = new EventEmitter<FivGalleryImage | HTMLImageElement>();
  @Output() willHide = new EventEmitter<FivGalleryImage | HTMLImageElement>();

  constructor(
    @Host() @Self() @Optional() public fivImage: FivGalleryImage,
    @Host() @Self() @Optional() public image: ElementRef
  ) {}

  ngOnInit(): void {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.inViewport) {
            this.handleIntersection();
            if (!this.virtual) {
              io.disconnect();
            }
          }
        } else {
          if (this.inViewport) {
            this.inViewport = false;
            if (this.fivImage) {
              this.willHide.emit(this.fivImage);
            } else if (this.image) {
              this.willHide.emit(this.image.nativeElement);
            }
          }
        }
      });
    });
    io['POLL_INTERVAL'] = 100;
    if (this.fivImage) {
      io.observe(this.fivImage.thumbnail.nativeElement);
    } else if (this.image) {
      io.observe(this.image.nativeElement);
    }
  }
  handleIntersection() {
    this.inViewport = true;
    if (this.fivLazyImage) {
      if (this.fivImage) {
        this.fivImage.src = this.fivLazyImage;
        this.willShow.emit(this.fivImage);
      } else if (this.image) {
        this.image.nativeElement.src = this.fivLazyImage;
        this.willShow.emit(this.image.nativeElement);
      }
    } else {
      if (this.fivImage) {
        this.willShow.emit(this.fivImage);
      } else if (this.image) {
        this.willShow.emit(this.image.nativeElement);
      }
    }
  }
}
