import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-discovery',
  templateUrl: './feature-discovery.page.html',
  styleUrls: ['./feature-discovery.page.scss']
})
export class FeatureDiscoveryPage implements OnInit {
  fp = 20;
  co = 20;

  constructor(private navController: NavController) {}

  ngOnInit() {}

  async log(s: string) {}

  navigateBack() {
    this.navController.back();
  }
}
