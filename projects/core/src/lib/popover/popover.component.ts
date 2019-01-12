import { FivButton } from './../button/button.component';
import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'fiv-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class FivPopover implements OnInit {

  public buttons: FivButton[] = [];

  constructor(public navParams: NavParams, public popoverController: PopoverController) {
    this.buttons = navParams.get('buttons');
  }

  ngOnInit() {
  }

  onItemClicked(i: number) {
    this.popoverController.dismiss({ index: i });
  }
}
