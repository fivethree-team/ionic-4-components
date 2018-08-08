import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from 'dist/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
})
export class DialogPage implements OnInit {

  @ViewChild('dialogTop') dialogTop: DialogComponent;
  @ViewChild('dialogBottom') dialogBottom: DialogComponent;

  backdrop: boolean = true;
  verticalAlign = 'top';
  animation = 'slideIn';
  floating: boolean = true;


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
