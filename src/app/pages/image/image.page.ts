import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss']
})
export class ImagePage implements OnInit {

  picsum: string[] = Array.from(new Array(10), (x, i) => `https://picsum.photos/500/?${i}`);
  picsumAsync: Observable<string[]> = of(Array.from(new Array(10), (x, i) => `https://picsum.photos/500/?${i + 10}`));

  constructor() { }

  ngOnInit() { }
}
