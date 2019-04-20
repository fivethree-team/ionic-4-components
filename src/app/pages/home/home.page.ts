import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  navigate(url: string) {
    this.nav.navigateForward(url);
  }
  open(url: string) {
    window.open(url, '_blank');
  }

}
