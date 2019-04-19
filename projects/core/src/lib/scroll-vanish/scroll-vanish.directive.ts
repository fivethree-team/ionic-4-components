import { AnimationBuilder, style, animate } from '@angular/animations';
import { IonContent } from '@ionic/angular';
import { Directive, Input, OnInit, Host, ElementRef, Renderer2 } from '@angular/core';
import { throttleTime } from 'rxjs/operators';

@Directive({
    selector: '[fivScrollVanish]',
})
export class FivScrollVanishDirective implements OnInit {

    @Input() fivScrollVanish: IonContent;

    lastDeltaY: number;

    private headerHeight: number;

    constructor(@Host() private header: ElementRef,
        private animationBuilder: AnimationBuilder,
        private renderer: Renderer2) {

    }

    ngOnInit() {
        this.fivScrollVanish.scrollEvents = true;
        this.fivScrollVanish.ionScrollStart
            .subscribe(() => this.headerHeight = this.getHeaderHeight());

        this.fivScrollVanish.ionScroll
            .pipe(throttleTime(100))
            .subscribe((event) => {
                const deltaY = event.detail.deltaY;
                this.hide();
                console.log(deltaY);
            });
    }

    hide() {
        this.renderer.setStyle(this.fivScrollVanish, '--offset-top', this.headerHeight);

        const animationBuilder = this.animationBuilder.build([
            style({
                transform: 'translateY(0)'
            }),
            animate('200ms', style({
                transform: 'translateY(-100%)'
            }))
        ]);

        const animation = animationBuilder.create(this.header.nativeElement);
        animation.play();
    }

    show() {

    }

    private getHeaderHeight(): number {
        return this.header.nativeElement.getBoundingClientRect().height;
    }
}
