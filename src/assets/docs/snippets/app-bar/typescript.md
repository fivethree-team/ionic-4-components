```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss'],
})
export class AppBarPage implements OnInit {

  titleLayout = 'hide';
  position = 'center';
  fabVisible = false;
  icon = 'checkmark';
  
}
```