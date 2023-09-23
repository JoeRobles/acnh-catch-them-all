import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { PreferencesInterface } from '../models/preferences.interface';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  preferences: PreferencesInterface = {} as PreferencesInterface;

  constructor(private localStorageService: LocalStorageService) {
    this.getPreferences();
  }

  getPreferences(): void {
    const data = this.localStorageService.get('preferences');
    if (data) {
      this.preferences = JSON.parse(data);
    }
  }

}
