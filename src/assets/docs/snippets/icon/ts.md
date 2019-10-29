```typescript
import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss']
})
export class IconPage implements OnInit {
  icon = 'md-notifications';
  indicatorValue = 0;
  off = false;
  dot = false;

  constructor(private util: UtilService) {}

  ngOnInit() {}

  decrement() {
    if (this.indicatorValue > 0) {
      this.indicatorValue--;
    }
  }
  increment() {
    this.indicatorValue++;
  }

  getNewIcon() {
    const icon = this.util.getRandomIcon();
    this.icon = icon.icons[1] || icon.icons[0];
  }
}

```
