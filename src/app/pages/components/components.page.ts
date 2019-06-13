import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss']
})
export class ComponentsPage implements OnInit {
  iconState = true;

  constructor() {}

  ngOnInit() {}

  toggleIcon() {
    this.iconState = !this.iconState;
  }

  stepperClick(event) {}
}
