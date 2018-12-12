import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {


  @Input() title: string;
  @Input() subtitle: string;
  @Input() snippet: string;
  showApi = false;

  constructor() { }

  ngOnInit() {
  }

}
