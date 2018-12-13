import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'fiv-app-bar-tab',
  templateUrl: './app-bar-tab.component.html',
  styleUrls: ['./app-bar-tab.component.scss']
})
export class AppBarTabComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() href: string;

  constructor() { }

  ngOnInit() {
  }

}
