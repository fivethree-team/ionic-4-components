import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './overflow-buttons.page.html',
  styleUrls: ['./overflow-buttons.page.scss']
})
export class ButtonsPage implements OnInit {
  count = 0;
  mode: 'popover' | 'bottom-sheet' | 'action-sheet' = 'popover';

  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  change(event: CustomEvent) {
    console.log(event);
    this.mode = event.detail.value;
  }
}
