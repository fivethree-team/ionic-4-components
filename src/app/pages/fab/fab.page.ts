import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss']
})
export class FabPage implements OnInit {
  pulse = false;

  icon = 'fitness';

  vertical = 'bottom';
  horizontal = 'end';
  extended = true;
  visible = true;
  scroll = true;
  mode = 'normal';

  constructor() {}

  ngOnInit() {}
}
