import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'fiv-app-bar-tab-content',
  templateUrl: './app-bar-tab-content.component.html',
  styleUrls: ['./app-bar-tab-content.component.scss']
})
export class AppBarTabContentComponent implements OnInit {

  @Input() icon: string;
  @Input() href: string;
  @Input() active = false;

  @Output() fivClick = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  onClick() {
    this.fivClick.emit();
  }

}
