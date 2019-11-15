import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FivFeature } from '@fivethree/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss']
})
export class AppBarPage implements OnInit {
  titleMode = 'hide';
  position = 'center';
  icon = 'color-wand';

  customTitleLayoutOptions: any = {
    header: 'Title Layout',
    subHeader: 'Select a title layout'
  };

  customFabPositionOptions: any = {
    header: 'Fab Position',
    subHeader: 'Select a floating action button position.'
  };

  @ViewChild('iconFeature', { static: false }) iconFeature: FivFeature;
  @ViewChild('tabFeature', { static: false }) tabFeature: FivFeature;

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
