import { Injectable } from '@angular/core';
import { icons, Icon } from './icons';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  getRandomIcon(): Icon {
    return icons.icons[Math.floor(Math.random() * icons.icons.length)];
  }
}
