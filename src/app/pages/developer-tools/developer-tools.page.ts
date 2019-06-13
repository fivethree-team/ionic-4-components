import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-tools',
  templateUrl: './developer-tools.page.html',
  styleUrls: ['./developer-tools.page.scss']
})
export class DeveloperToolsPage implements OnInit {
  path = 'assets/docs/developer-tools/developer-tools.md';

  constructor() {}

  ngOnInit() {}
}
