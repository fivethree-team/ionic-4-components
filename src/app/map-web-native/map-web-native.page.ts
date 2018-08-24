import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-web-native',
  templateUrl: './map-web-native.page.html',
  styleUrls: ['./map-web-native.page.scss'],
})
export class MapWebNativePage implements OnInit {
  
  isCordova: boolean;

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isCordova = this.platform.is('cordova');
  }

}
