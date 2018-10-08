import { FivStepperComponent } from './../../../projects/layout/src/lib/fiv-stepper/fiv-stepper.component';
import { Component, OnInit } from '@angular/core';
import { AppBarComponent } from 'dist/layout/lib/app-bar/app-bar.component';
import { timer } from 'rxjs';

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
    await timer(450).toPromise();
    await appBar.hideFab()
    await appBar.transitionLeft();
    await appBar.showFab()
    await timer(450).toPromise();
    await appBar.hideFab()
    await appBar.transitionMiddle();
    await appBar.showFab()

  
    

  }
  
  doStuff(stepper: FivStepperComponent){
    stepper.next();
  }

}
