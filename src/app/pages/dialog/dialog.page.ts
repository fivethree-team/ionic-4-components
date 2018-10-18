import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from 'core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
})
export class DialogPage implements OnInit {

  @ViewChild('dialogTop') dialogTop: DialogComponent;
  @ViewChild('dialogBottom') dialogBottom: DialogComponent;

  backdrop = true;
  verticalAlign = 'top';
  animation = 'slideIn';
  floating = false;
  fullscreen = false;
  rounded = true;
  backdropClose = false;
  swipeEnabled = true;

  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    if (this.verticalAlign === 'top') {
      this.dialogTop.showDialog();
    } else {
      this.dialogBottom.showDialog();
    }
  }

}
