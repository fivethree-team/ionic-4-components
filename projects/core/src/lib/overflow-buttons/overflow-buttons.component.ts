import { FivPopover } from './../popover/popover.component';
import {
  Platform,
  PopoverController,
  ActionSheetController
} from '@ionic/angular';
import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { FivButton } from '../button/button.component';

@Component({
  selector: 'fiv-overflow-buttons',
  templateUrl: './overflow-buttons.component.html',
  styleUrls: ['./overflow-buttons.component.scss']
})
export class FivOverflowButtons implements OnInit, AfterContentInit {
  @Input() slot = 'end';
  @Input() icon = 'more';
  @Input() text: string;
  @Input() mode: 'popover' | 'action-sheet' | 'bottom-sheet' = 'popover';
  @Input() color: string;
  @Input() count = 0;
  @ContentChildren(FivButton) buttons: QueryList<FivButton>;

  constructor(
    private platform: Platform,
    private popoverController: PopoverController,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  ngAfterContentInit(): void {}

  onMenuClicked(event) {
    console.log('menu clicked', this.mode);
    if (this.mode === 'action-sheet') {
      return this.presentActionSheet(event);
    }
    if (this.mode === 'popover') {
      return this.presentPopover(event);
    }
    if (this.platform.is('mobile')) {
      this.presentActionSheet(event);
    } else {
      this.presentPopover(event);
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FivPopover,
      event: ev,
      translucent: false,
      componentProps: {
        buttons: this.buttons
          .toArray()
          .slice(this.count)
          .filter(button => !button.disabled)
      }
    });

    await popover.present();
    const result = await popover.onDidDismiss();
    if (
      result &&
      result.data &&
      (result.data.index || result.data.index === 0)
    ) {
      this.onButtonClicked(result.data.index + this.count);
    }
  }

  async presentActionSheet(ev: any) {
    const buttons = [];
    this.buttons
      .toArray()
      .slice(this.count)
      .forEach((button, index) => {
        if (!button.disabled) {
          buttons.push({
            text: button.text,
            icon: button.icon,
            handler: () => {
              this.onButtonClicked(this.count + index);
            }
          });
        }
      });
    const actionSheet = await this.actionSheetController.create({
      buttons: buttons
    });
    await actionSheet.present();
  }

  onButtonClicked(i: number) {
    this.buttons.toArray()[i].click.emit();
  }
}
