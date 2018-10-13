export class ImageModel {
  data: string;
  filename: string;
  filesize: number;
  thumbnail: string;

  constructor(data: string, thumbnail: string, filename: string, filesize: number) {
    this.data = data;
    this.filename = filename;
    this.filesize = filesize;
    this.thumbnail = thumbnail;
  }
}
