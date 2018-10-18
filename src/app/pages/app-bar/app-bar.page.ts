import { Component, OnInit } from '@angular/core';
import { AppBarComponent } from 'core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss'],
})
export class AppBarPage implements OnInit {

  position = 'center';
  fabVisible = true;
  icon = 'checkmark';

  constructor() { }

  ngOnInit() {
  }

}
