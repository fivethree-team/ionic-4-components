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
  animation = 'slide';
  floating = false;

  constructor() { }

  ngOnInit() {
  }

}
