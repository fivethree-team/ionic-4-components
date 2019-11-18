import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  Input
} from '@angular/core';

@Component({
  selector: 'fiv-gallery-toolbar',
  templateUrl: './gallery-toolbar.component.html',
  styleUrls: ['./gallery-toolbar.component.scss']
})
export class FivGalleryToolbar implements OnInit {
  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any>;
  @Input() position: 'top' | 'bottom' = 'top';

  constructor() {}

  ngOnInit() {}
}
