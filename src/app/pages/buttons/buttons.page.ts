import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss']
})
export class ButtonsPage implements OnInit {
  subHeader = 'subheader here';
  header = 'More Actions';
  count = 1;
  forceActionsheet = false;
  forcePopover = false;
  iconsOnly = true;

  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
