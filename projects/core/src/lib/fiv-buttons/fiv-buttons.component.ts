import { PopoverComponent } from './../popover/popover.component';
import { Platform, PopoverController, ActionSheetController } from '@ionic/angular';
import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'fiv-buttons',
  templateUrl: './fiv-buttons.component.html',
  styleUrls: ['./fiv-buttons.component.scss']
})
export class FivButtonsComponent implements OnInit, AfterContentInit {

  @Input() slot = 'end';
  @Input() subHeader: string;
  @Input() header: string;
  @Input() count = 0;
  @Input() forceActionsheet = false;
  @Input() forcePopover = false;
  @Input() iconsOnly = true;
  @ContentChildren(ButtonComponent) buttons: QueryList<ButtonComponent>;

  constructor(private platform: Platform,
    private popoverController: PopoverController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('###', this.buttons.length);
  }

  onMenuClicked(event) {
    if (this.forceActionsheet) {
      this.presentActionSheet(event);
      return;
    }
    if (this.forcePopover) {
      this.presentPopover(event);
      return;
    }
    if (this.platform.is('mobile')) {
      this.presentActionSheet(event);
    } else {
      this.presentPopover(event);
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: false,
      componentProps: {
        'buttons': this.buttons.toArray().slice(this.count),
      }
    });

    await popover.present();
    const result = await popover.onDidDismiss();
    if (result && result.data && (result.data.index || result.data.index === 0)) {
      this.onButtonClicked(result.data.index + this.count);
    }
  }

  async presentActionSheet(ev: any) {
    const buttons = [];
    this.buttons.toArray().slice(this.count)
      .forEach((button, index) => {
        buttons.push({
          text: button.text,
          icon: button.icon,
          handler: () => {
            this.onButtonClicked(this.count + index);
          }
        });
      });
    const actionSheet = await this.actionSheetController.create({
      header: this.header,
      subHeader: this.subHeader,
      buttons: buttons
    });
    await actionSheet.present();
  }

  onButtonClicked(i: number) {
    this.buttons.toArray()[i].click.emit();
  }

}
