import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Set an item in the local storage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get an item from the local storage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Remove an item from the local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from the local storage
  clear(): void {
    localStorage.clear();
  }
}
