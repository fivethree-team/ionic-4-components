import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  production = environment.production;
  constructor(private nav: NavController) {}

  ngOnInit() {}

  navigate(url: string) {
    this.nav.navigateForward(url);
  }
  open(url: string) {
    window.open(url, '_blank');
  }
}
