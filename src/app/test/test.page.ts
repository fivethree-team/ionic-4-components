import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { tween, fromTo, morph, linear } from '@fivethree/core';
import { IonContent } from '@ionic/angular';
import { FivOverlay } from '@fivethree/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss']
})
export class TestPage implements OnInit {
  @ViewChild('animationElement') element: ElementRef;
  @ViewChild('a') a: ElementRef;
  @ViewChild('b') b: ElementRef;
  @ViewChild('morphElement') morphElement: ElementRef;
  @ViewChild('overlay') overlay: FivOverlay;
  @ViewChild(IonContent, { read: ElementRef }) content: ElementRef;
  tweening: boolean;

  constructor() {}

  ngOnInit() {}

  tween() {
    this.overlay.show();

    const bounds = this.element.nativeElement.getBoundingClientRect();
    const startPosition = {
      top: bounds.top,
      left: bounds.left,
      height: this.element.nativeElement.clientHeight,
      width: this.element.nativeElement.clientWidth
    };
    this.tweening = true;
    const width = Math.max(
      Math.random() * this.content.nativeElement.clientWidth,
      140
    );
    const height = Math.max(
      Math.random() * this.content.nativeElement.clientHeight,
      140
    );
    const top =
      Math.random() * (this.content.nativeElement.clientHeight - height);

    const left =
      Math.random() * (this.content.nativeElement.clientWidth - width);
    tween(linear, 200)
      .pipe(
        fromTo(this.morphElement, 'left', startPosition.left, left),
        fromTo(this.morphElement, 'top', startPosition.top, top),
        fromTo(this.morphElement, 'width', startPosition.width, width),
        fromTo(this.morphElement, 'height', startPosition.height, height)
      )
      .subscribe({
        complete: () => this.updateSource(left, top, width, height)
      });
  }

  morph() {
    this.overlay.show();
    tween(linear, 200)
      .pipe(morph(this.element, this.morphElement))
      .subscribe({ complete: () => console.log('morph complete') });
  }

  updateSource(left: number, top: number, width: number, height: number) {
    {
      this.tweening = false;
      this.element.nativeElement.style.left = left + 'px';
      this.element.nativeElement.style.top = top + 'px';
      this.element.nativeElement.style.width = width + 'px';
      this.element.nativeElement.style.height = height + 'px';
    }
  }
}
