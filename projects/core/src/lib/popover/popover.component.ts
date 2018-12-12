import { ButtonComponent } from './../button/button.component';
import { Component, OnInit, Input } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'fiv-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  public buttons: ButtonComponent[] = [];

  constructor(public navParams: NavParams, public popoverController: PopoverController) {
    this.buttons = navParams.get('buttons');
  }

  ngOnInit() {
  }

  onItemClicked(i: number) {
    this.popoverController.dismiss({ index: i });
  }
}
