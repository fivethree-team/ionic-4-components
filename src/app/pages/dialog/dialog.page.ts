import { Component, OnInit, ViewChild } from '@angular/core';
import { FivDialog } from '@fivethree/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
})
export class DialogPage implements OnInit {

  @ViewChild('dialog') dialog: FivDialog;

  backdrop = true;
  verticalAlign = 'top';
  horizontalAlign = 'left';
  shape = 'fill';
  duration = 3600;
  inDuration = '220';
  outDuration = '180';


  constructor() { }

  ngOnInit() {
  }

  close() {
    console.log('dialog closed');
  }

  over() {
    console.log('dialog duration over');
  }
}
