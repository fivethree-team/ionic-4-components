import { FivImageViewer } from './../../../../projects/core/src/lib/image-viewer/image-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActionClick(index) {
    console.log('test', index);
  }

  fivClose(event) {
    console.log('fivClose', event);
  }

  onLoad(image: FivImageViewer | HTMLImageElement) {
    console.log('onload', image);
    image.src = 'https://placehold.it/936x936';
  }

}
