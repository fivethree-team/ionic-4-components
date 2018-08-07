import { Component } from '@angular/core';
import { LoadingService } from 'dist/ionic-material-loading';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public loading: LoadingService) {

  }

  fabComplete() {
    console.log('fab complete');
  }

  showHint(refresher) {
    refresher.showHint();
  }

  onRefresh(refresher) {
    setTimeout(()=>{
      refresher.completeRefresh();
    },2000)
  }

}
