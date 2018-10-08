import { Component, OnInit, AfterContentInit,Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'fiv-step',
  templateUrl: './fiv-step.component.html',
  styleUrls: ['./fiv-step.component.scss']
})
export class FivStepComponent implements OnInit, AfterContentInit {

  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() title = '';
  @Input() subtitle = '';

  @ViewChild(TemplateRef) content: TemplateRef<any>;



  constructor() {
  }

  ngOnInit() { }

  ngAfterContentInit(): void {

  }

}
