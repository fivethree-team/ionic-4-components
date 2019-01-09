import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@fivethree/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
})
export class DialogPage implements OnInit {

  @ViewChild('dialog') dialog: DialogComponent;

  backdrop = true;
  verticalAlign = 'top';
  animation = 'slide';
  floating = false;

  constructor() { }

  ngOnInit() {
  }

}
