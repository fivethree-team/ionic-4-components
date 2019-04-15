import { FivImageViewer } from './../../../../projects/core/src/lib/image-viewer/image-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  numbers: number[];

  options = {
    lazy: true
  };

  constructor() {
    this.numbers = Array(5).fill(0).map((x, i) => i);
  }

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

  log(event, number) {
    console.log('slide image showed', number, event);
  }

}
