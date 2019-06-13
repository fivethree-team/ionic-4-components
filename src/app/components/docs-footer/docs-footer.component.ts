import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs-footer',
  templateUrl: './docs-footer.component.html',
  styleUrls: ['./docs-footer.component.scss']
})
export class DocsFooterComponent implements OnInit {
  @Input() path: string;

  editHref: string;

  constructor() {}

  ngOnInit() {
    this.editHref = `https://github.com/fivethree-team/ionic-4-components/edit/master/src/${this.path}`;
  }
}
