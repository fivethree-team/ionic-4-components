import { FivGalleryImage } from '../gallery/gallery-image/gallery-image.component';
import { Directive, OnInit, Input, EventEmitter, Output, Host, Self, Optional, ElementRef } from '@angular/core';

@Directive({
  selector: '[fivLazyImage]'
})
export class FivLazyImage implements OnInit {

  @Input() fivLazyImage: string;
  @Output() willShow = new EventEmitter<FivGalleryImage | HTMLImageElement>();

  constructor(
    @Host() @Self() @Optional() public fivImage: FivGalleryImage,
    public image: ElementRef,
  ) { }

  ngOnInit(): void {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          this.handleIntersection();

          observer.disconnect();
        }
      });
    });
    io['POLL_INTERVAL'] = 100;
    if (this.fivImage) {
      io.observe(this.fivImage.image.nativeElement);
    } else {
      io.observe(this.image.nativeElement);
    }




  }
  handleIntersection() {
    if (this.fivLazyImage) {
      if (this.fivImage) {
        this.fivImage.src = this.fivLazyImage;
        this.willShow.emit(this.fivImage);
      } else {
        this.image.nativeElement.src = this.fivLazyImage;
        this.willShow.emit(this.image.nativeElement);
      }
    } else {
      this.willShow.emit(this.fivImage || this.image.nativeElement);
    }

  }


}
