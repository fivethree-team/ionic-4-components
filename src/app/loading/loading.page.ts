import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fabComplete() {
    console.log('fab complete');
  }

  buttonComplete() {
    console.log('button complete');
  }

  showHint(refresher) {
    refresher.showHint();
  }

  onRefresh(refresher) {
    setTimeout(() => {
      refresher.completeRefresh();
    }, 2000);
  }

}
