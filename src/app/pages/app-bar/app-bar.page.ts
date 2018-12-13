import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss'],
})
export class AppBarPage implements OnInit {

  titleLayout = 'hide';
  position = 'center';
  fabVisible = false;
  icon = 'checkmark';

  customTitleLayoutOptions: any = {
    header: 'Title Layout',
    subHeader: 'Select a title layout',
  };

  customFabPositionOptions: any = {
    header: 'Fab Position',
    subHeader: 'Select a floating action button position.',
  };


  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }


}
