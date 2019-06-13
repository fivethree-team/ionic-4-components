import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.page.html',
  styleUrls: ['./viewport.page.scss']
})
export class ViewportPage implements OnInit {
  visible = false;

  constructor() {}

  ngOnInit() {}

  appear(event) {
    this.visible = true;
  }
  disappear(event) {
    this.visible = false;
  }
}
