import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  animations: [trigger('listAnim', [
    state('open', style({ height: '*', opacity: 1 })),
    state('closed', style({ height: '0px', opacity: 0 })),
    transition('closed => open', [
      style({ height: '0px', opacity: 0 }),
      animate('220ms ease', style({ height: '*', opacity: 1 }))
    ]),
    transition('open => closed', [
      style({ height: '*', opacity: 1 }),
      animate('180ms ease', style({ height: '0', opacity: 0 }),
      )
    ])
  ])]
})
export class ExampleComponent implements OnInit {


  @Input() title: string;
  @Input() subtitle: string;
  @Input() html: string;
  @Input() css: string;
  @Input() typescript: string;
  @Input() api: string;
  showApi = false;

  constructor() { }

  ngOnInit() {
  }

}
