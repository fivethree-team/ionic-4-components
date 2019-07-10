import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss']
})
export class TestPage implements OnInit {
  picsum: string[] = Array.from(
    new Array(30),
    (x, i) => `https://picsum.photos/500/?${i + 10}`
  );

  constructor() {}

  ngOnInit() {}

  setSource(img, src) {
    console.log(img, src);
    img.src = src;
  }

  log(s: string) {
    console.log(s);
  }
}
