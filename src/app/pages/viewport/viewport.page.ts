import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.page.html',
  styleUrls: ['./viewport.page.scss'],
})
export class ViewportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  appear(event) {
    console.log('element appeared in viewport', event);
  }
  disappear(event) {
    console.log('element disappeard', event);
  }

}
