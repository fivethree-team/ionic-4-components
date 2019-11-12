import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import {
  tween,
  easeOutSine,
  FivOverlay,
  morph,
  reverse,
  after,
  translate,
  fromTo,
  slideOutDown,
  slideInUp,
  slideOutLeft,
  slideInLeft,
  slideInRight,
  slideOutRight,
  slideOutUp,
  slideInDown,
  fadeOut,
  fadeIn,
  getPosition,
  easeInOutSine,
  fps,
  linear
} from '@fivethree/core';
import { Platform } from '@ionic/angular';
import { trigger, transition, useAnimation } from '@angular/animations';
import { concat, zip } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

export interface Item {
  url: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  animations: [
    trigger('slideout', [
      transition(
        '* => void',
        useAnimation(translate, {
          params: {
            toX: '0',
            toY: '100%',
            time: '300ms ease'
          }
        })
      )
    ])
  ]
})
export class TestPage implements OnInit, AfterViewInit {
  @ViewChild('i2', { read: ElementRef }) i2: ElementRef;
  @ViewChild('content', { read: ElementRef }) content: ElementRef;
  @ViewChild('title', { read: ElementRef }) title: ElementRef;
  @ViewChild('overlay') overlay: FivOverlay;

  @ViewChildren('item', { read: ElementRef }) cards: QueryList<ElementRef>;
  @ViewChildren('label', { read: ElementRef }) labels: QueryList<ElementRef>;
  @ViewChildren('image', { read: ElementRef }) images: QueryList<ElementRef>;
  @ViewChildren('desc', { read: ElementRef }) descs: QueryList<ElementRef>;
  @ViewChild('sl', { read: ElementRef }) slideElement: ElementRef;

  s = true;

  items: Item[] = [
    {
      url: 'https://via.placeholder.com/640x360',
      title: '1. title',
      subtitle: '1. subtitle'
    },
    {
      url: 'https://via.placeholder.com/640x360/0000FF',
      title: '2. title',
      subtitle: '2. subtitle'
    },
    {
      url: 'https://via.placeholder.com/640x360/FF0000',
      title: '3. title',
      subtitle: '3. subtitle'
    }
  ];
  currentIndex: number;
  currentItem: Item;

  constructor(private platform: Platform) {}

  ngOnInit() {}

  startMorph(i, it) {
    fadeOut(this.descs.toArray()[i], easeOutSine, 150)
      .pipe(after(() => this.overlay.show(null, { index: i, item: it })))
      .subscribe();
  }

  morph(data: { index: number; item: Item }) {
    this.currentIndex = data.index;
    this.currentItem = data.item;

    tween(easeInOutSine, 320)
      .pipe(
        tap(console.log),
        fps(),
        morph(this.content, this.cards.toArray()[data.index])
      )
      .subscribe();

    this.content.nativeElement.style.opacity = 1;
  }

  morphOut() {
    const m = tween(easeInOutSine, 320).pipe(
      reverse(),
      // fps(),
      morph(this.content, this.cards.toArray()[this.currentIndex]),
      after(() => this.overlay.hide())
    );
    const f = fadeIn(this.descs.toArray()[this.currentIndex], easeOutSine, 150);

    concat(m, f).subscribe();
    return m;
  }
  ngAfterViewInit(): void {
    this.currentIndex = 0;
    this.currentItem = this.items[0];
  }

  animations() {
    concat(
      slideOutDown(this.slideElement, easeOutSine, 240),
      slideInUp(this.slideElement, easeOutSine, 220),
      slideOutLeft(this.slideElement, easeOutSine, 220),
      slideInLeft(this.slideElement, easeOutSine, 220),
      slideOutRight(this.slideElement, easeOutSine, 2200),
      slideInRight(this.slideElement, easeOutSine, 220),
      slideOutUp(this.slideElement, easeOutSine, 220),
      slideInDown(this.slideElement, easeOutSine, 220),
      fadeOut(this.slideElement, easeOutSine, 120),
      fadeIn(this.slideElement, easeOutSine, 120),
      fadeOut(this.slideElement, easeOutSine, 120),
      fadeIn(this.slideElement, easeOutSine, 120),
      fadeOut(this.slideElement, easeOutSine, 120),
      fadeIn(this.slideElement, easeOutSine, 120)
      // m()
    ).subscribe();
  }

  deconstruct() {
    const card = this.cards.toArray()[this.currentIndex];
    const f = getPosition(card);
    concat(
      this.morphOut(),
      zip(
        slideOutRight(card, easeOutSine, 400),
        fadeOut(card, easeOutSine, 400)
      ),
      tween(easeOutSine, 200).pipe(fromTo(card, 'height', f.height, 0)),
      after(() => (this.items = this.items.splice(this.currentIndex, 1)))
    ).subscribe();
  }
}
