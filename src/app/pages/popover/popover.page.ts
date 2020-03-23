import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  actionClicked(n: number) {}

  open(url) {
    window.open(
      'https://www.npmjs.com/package/@fivethree/core/v/1.0.0-alpha.0'
    );
  }
}
