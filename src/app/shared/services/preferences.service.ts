import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { PreferencesInterface } from '../models/preferences.interface';
import { MonthArrayTypeEnum } from '../models/month-array-type.enum';
import { LanguageTypeEnum } from '../models/language-type.enum';
import { BehaviorSubject } from 'rxjs';
import { MonthArrayType } from '../models/hemisphere.type';
import { LanguageType } from '../models/language.type';
type PreferenceType = 'autoplay' | 'hemisphere' | 'language' | 'mood';
@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  autoplay$ = new BehaviorSubject<boolean>(false);
  hemisphere$ = new BehaviorSubject<MonthArrayType>(MonthArrayTypeEnum.MonthArraySouthern);
  language$ = new BehaviorSubject<LanguageType>(LanguageTypeEnum.NameUSen);
  languageTypeEnum = LanguageTypeEnum;
  monthArrayTypeEnum = MonthArrayTypeEnum;
  mood$ = new BehaviorSubject<number>(2);

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.getPreferences();
  }

  getPreferences(): void {
    const data = this.localStorageService.get('preferences');
    if (data) {
      const preferences: PreferencesInterface = JSON.parse(data);
      if(Object.keys(preferences).length > 0) {
        this.autoplay$.next(preferences.autoplay);
        this.mood$.next(preferences.mood);
        this.hemisphere$.next(preferences.hemisphere);
        this.language$.next(preferences.language);
      } else {
        this.autoplay$.next(true);
        this.mood$.next(2);
        this.hemisphere$.next(this.monthArrayTypeEnum.MonthArraySouthern);
        this.language$.next(this.languageTypeEnum.NameUSes);
      }
    }
    this.localStorageService.setObject(
      'preferences',
      {
        autoplay: this.autoplay$.value,
        hemisphere: this.hemisphere$.value,
        language: this.language$.value,
        mood: this.mood$.value
      });
  }
  updatePreferences(preference: any, key: PreferenceType): void {
    console.log('preference: ', preference);
    console.log('key: ', key)
    let preferences = this.localStorageService.getObject('preferences') as PreferencesInterface;

    switch(key) {
      case 'autoplay':
        preferences.autoplay = preference;
        break;
      case 'hemisphere':
        preferences.hemisphere = preference;
        break;
      case 'language':
        preferences.language = preference;
        break;
      case 'mood':
        preferences.mood = preference;
        break;
    }
    this.localStorageService.setObject(
      'preferences',
      preferences
    );
  }
}
