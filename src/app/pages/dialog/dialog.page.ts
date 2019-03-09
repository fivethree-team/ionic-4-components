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
  title = 'New Message';
  subtitle = 'You have a new message from Marc!';
  duration = 3600;
  inDuration = '220';
  outDuration = '180';


  constructor() { }

  ngOnInit() {
  }

}
