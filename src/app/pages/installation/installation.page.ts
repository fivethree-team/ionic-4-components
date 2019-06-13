import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss']
})
export class InstallationPage implements OnInit {
  path = 'assets/docs/installation/installation.md';

  constructor() {}

  ngOnInit() {}
}
