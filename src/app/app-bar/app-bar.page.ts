import { Component, OnInit } from '@angular/core';
import { AppBarComponent } from 'core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss'],
})
export class AppBarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async fabClicked(appBar: AppBarComponent) {
    await appBar.hideFab();
    await appBar.transitionRight();
    await appBar.showFab();
    await timer(450).toPromise();
    await appBar.hideFab();
    await appBar.transitionLeft();
    await appBar.showFab();
    await timer(450).toPromise();
    await appBar.hideFab();
    await appBar.transitionMiddle();
    await appBar.showFab();
  }

}
