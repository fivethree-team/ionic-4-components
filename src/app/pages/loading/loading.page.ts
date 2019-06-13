import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss']
})
export class LoadingPage implements OnInit {
  mode = 'determinate';
  value = 0;

  constructor() {}

  ngOnInit() {}

  fabComplete() {}

  buttonComplete() {}

  showHint(refresher) {
    refresher.showHint();
  }

  onRefresh(refresher) {
    setTimeout(() => {
      refresher.completeRefresh();
    }, 2000);
  }

  complete() {}
}
