import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'fiv-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class FivStep implements OnInit {
  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() open = false;
  @Input() title = '';
  @Input() subtitle = '';

  @ViewChild(TemplateRef, { static: false }) content: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
