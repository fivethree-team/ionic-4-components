import {
  Component,
  OnInit,
  Host,
  OnDestroy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private resize: Subscription;

  constructor(
    @Host() public content: IonContent,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.content.getScrollElement().then(el => {
      this.setMinHeight(
        el.clientHeight - this.el.nativeElement.firstChild.clientHeight
      );
    });

    this.resize = fromEvent(window, 'resize')
      .pipe(debounceTime(10))
      .subscribe(res => {
        this.content.getScrollElement().then(el => {
          this.setMinHeight(
            el.clientHeight - this.el.nativeElement.firstChild.clientHeight
          );
        });
      });
  }

  ngOnDestroy(): void {
    this.resize.unsubscribe();
  }

  setMinHeight(height: number) {
    document.body.style.setProperty('--example-min-height', `${height}px`);
  }
}
