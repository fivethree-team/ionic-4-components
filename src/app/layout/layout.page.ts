import { Component, OnInit } from '@angular/core';
import { AppBarComponent } from 'dist/layout/lib/app-bar/app-bar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async fabClicked(appBar:AppBarComponent){
    await appBar.hideFab()
    await appBar.transitionRight()
    await appBar.showFab()
    await appBar.hideFab()
    await appBar.transitionMiddle();
    await appBar.showFab()
    await appBar.hideFab()
    await appBar.transitionLeft();
    await appBar.showFab()


  }

}
