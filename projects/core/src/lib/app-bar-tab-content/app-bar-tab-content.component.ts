import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'fiv-app-bar-tab-content',
  templateUrl: './app-bar-tab-content.component.html',
  styleUrls: ['./app-bar-tab-content.component.scss']
})
export class AppBarTabContentComponent implements OnInit {

  @Input() currentPage: TemplateRef<any>;
  @Input() icon: string;
  @Input() template: TemplateRef<any>;

  @Output() fivClick = new EventEmitter<TemplateRef<any>>();


  constructor() { }

  ngOnInit() {
  }


  emitPage() {
    this.fivClick.emit(this.template);
  }

}
