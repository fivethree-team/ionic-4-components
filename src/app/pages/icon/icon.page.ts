import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss']
})
export class IconPage implements OnInit {
  icon = 'notifications';
  badge = 0;
  off = false;
  dot = false;

  constructor(private util: UtilService) {}

  ngOnInit() {}

  decrement() {
    if (this.badge > 0) {
      this.badge--;
    }
  }
  increment() {
    this.badge++;
  }

  getNewIcon() {
    const icon = this.util.getRandomIcon();
    this.icon = icon.icons[1] || icon.icons[0];
  }
}
