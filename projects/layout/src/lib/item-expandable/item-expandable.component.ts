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

    /**
     * Color used for the item.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     */
    @Input() color?: Color;

    /**
     * If true, the user cannot interact with the item. Defaults to `false`.
     */
    @Input() disabled = false;

    /**
     * If true, the content is expanded and visible to the user. Defaults to `false`.
     */
    @Input() expanded = false;

    /**
     * Icon displayed in the item.
     */
    @Input() icon?: string;

    /**
     * Icon rotating 180° when toggling the content. Defaults to `arrow-down`.
     */
    @Input() iconAnimated = 'ios-arrow-down';

    /**
     * Slot to position the icon in the item. Defaults to `end`.
     */
    @Input() iconAnimatedSlot: 'start' | 'end' = 'end';

    /**
     * Slot to position the icon in the item. Defaults to `start`.
     */
    @Input() iconSlot: 'start' | 'end' = 'start';

    /**
     * Text displayed in the item.
     */
    @Input() text?: string;

    /**
     * How the bottom border should be displayed on the item. 
     * Available options: "full", "inset", "none". 
     */
    @Input() lines?: 'full' | 'inset' | 'none';

    /**
     * Emitted when the `expanded` state changes.
     */
    @Output() fivExpand: EventEmitter<boolean> = new EventEmitter<boolean>();

    state: 'open' | 'closed';

    constructor() { }

    ngOnInit(): void {
        this.state = this.expanded ? 'open' : 'closed'
    }

    toggleExpand() {
        this.expanded = !this.expanded;
        this.state = this.expanded ? 'open' : 'closed';
        this.fivExpand.emit(this.expanded);
    }

}