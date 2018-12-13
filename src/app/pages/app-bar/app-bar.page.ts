import { Component, OnInit } from '@angular/core';
import { AppBarComponent } from 'core';
import { timer } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss'],
})
export class AppBarPage implements OnInit {

  titleLayout = 'hide';
  position = 'center';
  fabVisible = true;
  icon = 'checkmark';

  customPopoverOptions: any = {
    header: 'Title Layout',
    subHeader: 'Select a title layout',
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
