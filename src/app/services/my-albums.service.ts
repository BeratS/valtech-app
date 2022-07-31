import { Injectable } from '@angular/core';
import { IMyAlbums } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class MyAlbumsService {

  LS_KEY = 'Albums';

  constructor() { }

  getAlbumById(id: number): IMyAlbums {
    // Already album list
    const storedAlbums = [...this.getMyAlbums()];
    // Find ALbum
    const findAlbum = storedAlbums.find(el => el.id === id);
    // Check Album and return
    return findAlbum ? findAlbum : {} as IMyAlbums;
  }

  getMyAlbums(): IMyAlbums[] {
    try {
      const ls = localStorage.getItem(this.LS_KEY);
      return ls ? JSON.parse(ls) : [];
    } catch (e) {
      return [];
    }
  }

  storeAlbums(data: IMyAlbums[]): void {
    try {
      localStorage.setItem(this.LS_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Unable to store or update your albums');
    }
  }
  
  createAlbum(name: string, img: string): void {
    // Already album list
    const storedAlbums = [...this.getMyAlbums()];

    // Check storedAlbum length
    const checkLength = storedAlbums.length === 0;
    // Find Album
    const findAlbumIdx = !checkLength
      ? storedAlbums.findIndex(el => el?.name === name)
      : -1;

    if (checkLength || findAlbumIdx < 0) {
      const date = new Date();
      // Album new item
      storedAlbums.push({
        id: date.getTime(), name, date, imgs: [img]
      } as IMyAlbums);
    } else {
      if (!storedAlbums[findAlbumIdx].imgs.includes(img)) {
        storedAlbums[findAlbumIdx].imgs.push(img);
      }
    }
    this.storeAlbums(storedAlbums);
  }

}
