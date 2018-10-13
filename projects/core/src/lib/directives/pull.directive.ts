import { Directive, OnInit, ElementRef, Input, Output, EventEmitter, Host } from '@angular/core';
import * as Hammer from 'hammerjs';
import { Content } from '@ionic/angular';



@Directive({
  selector: '[fivPull]'
})
export class PullDirective implements OnInit {

  startPositionTop: number;

  @Input() minPullHeight = 112;
  @Input() maxPullHeight = 168;
  @Input() enabled = true;

  @Output() fivRefresh = new EventEmitter<any>();
  @Output() fivCancel = new EventEmitter<any>();
  @Output() fivPull = new EventEmitter<number>();



  ngOnInit(): void {

    const hammer = new Hammer(this.element.nativeElement);
    hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
    hammer.on('pandown panup panstart panend', (ev: any) => {
      switch (ev.type) {
        case 'panstart':
          this._handlePanStart(ev);
          break;
        case 'panend':
          this._handlePanEnd(ev);
          break;
        default:
          this._handlePan(ev);
      }
    });


  }

  constructor(private element: ElementRef, @Host() private content: Content) {
    console.log(content);
    content.scrollY = false;
  }

  private _handlePanStart(ev) {
    this.startPositionTop = ev.center.y;
    console.log('pan start', this.startPositionTop);
  }

  private _handlePanEnd(ev) {
    if (ev.isFinal) {
      console.log('pan end', ev);
      const pointerY = ev.center.y;
      const distance = pointerY - this.startPositionTop;
      if (distance >= 112) {
        console.log('refresh');
        this.fivRefresh.emit();
      } else {
        console.log('no refresh');
        this.fivCancel.emit();
      }
    }
  }

  private _handlePan(ev) {
    const pointerY = ev.center.y;
    const distance = pointerY - this.startPositionTop;
    if (distance >= 0 && distance <= this.maxPullHeight) {
      this.fivPull.emit(distance / this.maxPullHeight);
    }
  }
}
