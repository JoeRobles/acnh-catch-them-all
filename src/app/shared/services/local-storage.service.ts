import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(item: string, data: string): void {
    localStorage.setItem(item, data);
  }
  setObject(item: string, data: object): void {
    this.set(item, JSON.stringify(data));
  }
  get(item: string): string | null {
    return localStorage.getItem(item);
  }
  getObject(item: string): object {
    const data = this.get(item);
    return data ? JSON.parse(data) : '';
  }
  delete(item: string): void {
    localStorage.removeItem(item);
  }
}
