import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { tween, fromTo, morph } from '@fivethree/core';
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
    tween(this.linear, 200)
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
    tween(this.linear, 200)
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

  linear(t, from, to, duration) {
    const c = to - from;
    return (c * t) / duration + from;
  }

  easeInQuad(t, from, to, duration) {
    const c = to - from;
    return c * (t /= duration) * t + from;
  }

  easeOutSine(t, from, to, duration) {
    const c = to - from;
    return c * Math.sin((t / duration) * (Math.PI / 2)) + from;
  }

  easeInOutQuad(t, from, to, duration) {
    const c = to - from;
    if ((t /= duration / 2) < 1) {
      return (c / 2) * t * t + from;
    } else {
      return (-c / 2) * (--t * (t - 2) - 1) + from;
    }
  }

  easeOutElastic(t, b, _c, d) {
    let c = _c - b;
    let a, p, s;
    s = 1.20158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.54;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
      c +
      b
    );
  }
}
