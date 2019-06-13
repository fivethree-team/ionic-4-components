import { FivGallery } from './../gallery.component';
import { Component, OnInit, Host } from '@angular/core';

@Component({
  selector: 'fiv-gallery-toolbar-content',
  templateUrl: './gallery-toolbar-content.component.html',
  styleUrls: ['./gallery-toolbar-content.component.scss']
})
export class FivGalleryToolbarContent implements OnInit {
  constructor(@Host() public gallery: FivGallery) {}

  ngOnInit() {}
}
