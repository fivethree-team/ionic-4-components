import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
})
export class IconPage implements OnInit {

  iconState = true;
  indicatorValue = -1;

  constructor() { }

  ngOnInit() {
  }

  decrement() {
    if (this.indicatorValue >= 0) {
      console.log('decrement value', this.indicatorValue - 1);
      this.indicatorValue--;
    }
  }
  increment() {
    console.log('increment value', this.indicatorValue + 1);
    this.indicatorValue++;
  }

}
