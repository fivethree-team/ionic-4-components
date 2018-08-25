import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import Hammer from 'hammerjs';
import { Content } from '@ionic/angular';

@Directive({ selector: '[refresher]' })
export class RefresherDirective implements OnInit {


    elem: Content;
    enabled: boolean;
    distance: number;

    ngOnInit(): void {
        this.elem = this.el.nativeElement.closest('ion-content');
        console.log(this.elem);
        const hammer = new Hammer(this.elem);

        hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 });

        hammer.on('panstart', this.panStart);
        hammer.on('pandown', this.panDown);
        hammer.on('panup', this.panUp);
        hammer.on('panend', this.panEnd);
    }
    constructor(public el: ElementRef, public renderer: Renderer2) { }


    panStart(event) {
        console.log('panstART', event,this.elem);
        const startingPositionY = this.elem.getScrollElement().scrollTop;

        if (startingPositionY === 0) {
            this.enabled = true;
        }
    }

    panEnd(event): any {
        console.log('panend', event);
    }
    panUp(event): any {
        console.log('panUp', event);
    }
    panDown(event): any {
        console.log('panDown', event);
        if (!this.enabled) {
            return;
        }

        event.preventDefault();
        this.distance = event.distance / 2.5;

        this.setContentPan();
    }

    setContentPan(): any {
        console.log('distaNCE ', this.distance)
    }


}