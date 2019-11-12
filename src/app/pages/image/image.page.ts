import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss']
})
export class ImagePage implements OnInit {
  picsum: string[] = Array.from(
    new Array(12),
    (x, i) => `https://picsum.photos/1080/720/?${i}`
  );

  constructor() {}

  ngOnInit() {}
}
