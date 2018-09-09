import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Color } from "@ionic/core";

@Component({
    selector: 'fiv-item-expandable',
    templateUrl: 'item-expandable.component.html',
    styleUrls: ['item-expandable.component.scss'],
    animations: [
        trigger('listAnim', [
            state('open', style({ height: '*' })),
            state('closed', style({ height: '0' })),
            transition('closed => open', [
                animate('350ms ease-out')
            ]),
            transition('open => closed', [
                animate('200ms ease-in')
            ])
        ]),
        trigger('arrowAnim', [
            state('open', style({ transform: 'rotateZ(-180deg)' })),
            state('closed', style({ transform: 'rotateZ(0deg)' })),
            transition('closed => open', [
                animate('350ms ease-out')
            ]),
            transition('open => closed', [
                animate('200ms ease-in')
            ])
        ])
    ]
})
export class ItemExpandableComponent implements OnInit {
    ngOnInit(): void {
    }

    public isOpen: boolean = false;
  state: string = 'closed';

    constructor(){

    }

    open() {
        if (this.isOpen == false) {
            this.isOpen = true;
            this.state = 'open';
        } else {
            this.isOpen = false;
            this.state = 'closed';
  
        }
    }
  
    close() {
        console.log('close');
        this.isOpen = false;
        this.state = 'closed';
    }

}