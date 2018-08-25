import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-map-web-native',
  templateUrl: './map-web-native.page.html',
  styleUrls: ['./map-web-native.page.scss'],
})
export class MapWebNativePage implements OnInit {
  
  apiKey = environment.mapApiKey
  isCordova: boolean;

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isCordova = this.platform.is('cordova');
  }

}
