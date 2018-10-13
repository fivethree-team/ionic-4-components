import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../models/imagemodel';
import {Lightbox} from 'ngx-lightbox';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-images-preview',
  templateUrl: './images-preview.component.html',
  styleUrls: ['./images-preview.component.scss']
})
export class ImagesPreviewComponent implements OnInit {
  public _images: ImageModel[] = [];

  public imagesToShow: ImageModel[] = [];

  @Input()
  public showImageTitles = false;

  @Input()
  public showImageSizes = false;

  @Input()
  public enableLightBox = false;

  @Input()
  public enablePagination = false;

  public pageToShow = 0;

  @Input()
  public imagesOnPage = 5;

  constructor(private lightbox: Lightbox) { }

  ngOnInit() {
  }

  @Input()
  set images(images: ImageModel[]) {
    this._images = images;

    if (!this.enablePagination) {
      this.imagesToShow = this._images;
    } else {
      this.loadImagesForPage(this.pageToShow, this.imagesOnPage);
    }
  }

  public pageChanged($event: PageEvent) {
    this.pageToShow = $event.pageIndex;
    this.loadImagesForPage(this.pageToShow, this.imagesOnPage);
  }

  private loadImagesForPage(pageToShow: number, imagesOnPage: number) {
    this.imagesToShow = [];
    for (let i = pageToShow * imagesOnPage; i < (pageToShow + 1) * imagesOnPage; i++) {
      if (i >= this._images.length) {
        break;
      }

      this.imagesToShow.push(this._images[i]);
    }
  }

  public openLightBox(imageToShow: ImageModel): void {
    if (this.enableLightBox === false) {
      return;
    }

    const albums: any[] = [];
    const album = {
      src: imageToShow.data,
      caption: imageToShow.filename
    };

    albums.push(album);
    this.lightbox.open(albums);
  }

}
