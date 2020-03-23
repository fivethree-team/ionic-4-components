import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'fiv-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class FivGalleryImage implements OnInit {
  @Input() src: string | SafeResourceUrl;
  originalSrc: string | SafeResourceUrl;
  index: number;

  @ViewChild('thumbnail', { static: true }) thumbnail: ElementRef;
  @Output() click = new EventEmitter<FivGalleryImage>();

  open() {
    this.click.emit(this);
  }
  constructor() {}

  ngOnInit() {}
}
