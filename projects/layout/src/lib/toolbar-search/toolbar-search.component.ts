import { Component, OnInit, Input, Output,EventEmitter,ElementRef, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'fiv-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss'],
  animations: [
    trigger('searchbarAnim', [
      transition('void => *', [
        style({ width: '0px' }),
        animate('175ms ease-out', style({ width: '100%' }))
      ]),
      transition('* => void', [
        style({ width: '100%' }),
        animate('125ms ease-in', style({ width: '0px',opacity: 0 }))
      ])
    ]),
    trigger('rotateAnim', [
      transition('void => *', [
        style({ opacity: '0'}),
        animate('175ms ease-out', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
      ]),
      transition('* => void', [
        animate('175ms ease-in', style({ opacity: '0', transform: 'rotateZ(45deg)' }))
      ]),
    ]),
    trigger('titleAnim', [
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(-20%)'}),
        animate('175ms ease-out', style({ opacity: '1', transform: 'translateY(0)'}))
      ]),
    ]),
  ]
})
export class ToolbarSearchComponent implements OnInit {

  searching = false;
  titleVisible = true;
  closeButtonVisible = false;
  @Input() title:string;
  @Input() placeholder:string;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();


  constructor(public renderer: Renderer2) { }

  ngOnInit() {
  }

  openSearchbar() {
    this.searching = true;
    this.titleVisible = false;
  }

  closeSearchbar() {
    this.closeButtonVisible = false;
    this.close.emit();

  }

  searchAnimDone(event) {
    console.log('###', event);
    if (event.fromState !== 'void') {
      this.closeButtonVisible = true;
    }
  }

  closeAnimDone(event) {
    console.log('###', event);
    if (event.fromState !== 'void') {
      this.searching = false;
    }
  }

  seachbarAnimDone(event) {
    console.log('!!!',event);
    if (event.fromState !== 'void') {
      this.titleVisible = true;
    }
  }

}
