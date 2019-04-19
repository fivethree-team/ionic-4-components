import { Platform, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FivFeature } from '@fivethree/core';

@Component({
  selector: 'app-feature-discovery',
  templateUrl: './feature-discovery.page.html',
  styleUrls: ['./feature-discovery.page.scss'],
})
export class FeatureDiscoveryPage implements OnInit {

  @ViewChild('fab', { read: FivFeature }) fabFeature: FivFeature;
  @ViewChild('button', { read: FivFeature }) buttonFeature: FivFeature;
  @ViewChild('menu', { read: FivFeature }) menuFeature: FivFeature;

  constructor(private platform: Platform,
    private toastController: ToastController) { }

  ngOnInit() {
  }


  async log(s: string) {
    const toast = await this.toastController.create({
      message: s,
      duration: 2000
    });
    toast.present();
  }
}
