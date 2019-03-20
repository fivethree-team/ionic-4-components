import { FivImageViewer } from './../image-viewer/image-viewer.component';
import { Directive, OnInit, Input, EventEmitter, Output, Host, Self, Optional, ElementRef } from '@angular/core';

@Directive({
  selector: '[fivLazyImage]'
})
export class LazyImageDirective implements OnInit {

  @Input() fivLazyImage: string;
  @Output() willShow = new EventEmitter<FivImageViewer | HTMLImageElement>();

  constructor(
    @Host() @Self() @Optional() public fivImage: FivImageViewer,
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
    if (this.fivImage) {
      io.observe(this.fivImage.element.nativeElement);
    } else {
      io.observe(this.image.nativeElement);
    }




  }
  handleIntersection() {
    if (this.fivLazyImage) {
      if (this.fivImage) {
        this.fivImage.src = this.fivLazyImage;
      } else {
        this.image.nativeElement.src = this.fivLazyImage;
      }
    } else {
      this.willShow.emit(this.fivImage || this.image.nativeElement);
    }

  }


}
