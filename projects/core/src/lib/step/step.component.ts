import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'fiv-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() title = '';
  @Input() subtitle = '';

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
