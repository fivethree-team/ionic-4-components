import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  apiKey = environment.mapApiKey;
  
  constructor() { }

  ngOnInit() {
  }

}
