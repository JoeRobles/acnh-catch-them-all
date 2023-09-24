import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { PreferencesInterface } from '../models/preferences.interface';
import { HemisphereTypeEnum } from '../models/hemisphere-type.enum';
import { LanguageTypeEnum } from '../models/language-type.enum';
import { BehaviorSubject } from 'rxjs';
import { HemisphereType } from '../models/hemisphere.type';
import { LanguageType } from '../models/language.type';
import { CritterType } from '../models/critter.type';
import { CritterTypeEnum } from '../models/critter-type.enum';
import { PreferenceType } from '../models/preference.type';
import { ModeType } from '../models/mode.type';
import { ModeTypeEnum } from '../models/mode-type.enum';
import { PreferenceTypeEnum } from '../models/preference-type.enum';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  autoplay$ = new BehaviorSubject<boolean>(false);
  display$ = new BehaviorSubject<CritterType>(CritterTypeEnum.Bugs);
  hemisphere$ = new BehaviorSubject<HemisphereType>(HemisphereTypeEnum.MonthArraySouthern);
  language$ = new BehaviorSubject<LanguageType>(LanguageTypeEnum.NameUSen);
  languageTypeEnum = LanguageTypeEnum;
  monthArrayTypeEnum = HemisphereTypeEnum;
  mode$ = new BehaviorSubject<ModeType>(ModeTypeEnum.Discovery);
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
        this.display$.next(preferences.display);
        this.hemisphere$.next(preferences.hemisphere);
        this.language$.next(preferences.language);
        this.mode$.next(preferences.mode);
        this.mood$.next(preferences.mood);
      } else {
        this.autoplay$.next(true);
        this.display$.next(CritterTypeEnum.Bugs);
        this.hemisphere$.next(this.monthArrayTypeEnum.MonthArraySouthern);
        this.language$.next(this.languageTypeEnum.NameUSes);
        this.mode$.next(ModeTypeEnum.Discovery);
        this.mood$.next(2);
      }
    }
    this.localStorageService.setObject(
      'preferences',
      {
        autoplay: this.autoplay$.value,
        display: this.display$.value,
        hemisphere: this.hemisphere$.value,
        language: this.language$.value,
        mode: this.mode$.value,
        mood: this.mood$.value,
      });
  }
  updatePreferences(preference: any, key: PreferenceType): void {
    let preferences = this.localStorageService.getObject('preferences') as PreferencesInterface;

    switch(key) {
      case PreferenceTypeEnum.Autoplay:
        preferences.autoplay = preference;
        break;
      case PreferenceTypeEnum.Display:
        preferences.display = preference;
        break;
      case PreferenceTypeEnum.Hemisphere:
        preferences.hemisphere = preference;
        break;
      case PreferenceTypeEnum.Language:
        preferences.language = preference;
        break;
      case PreferenceTypeEnum.Mode:
        preferences.mode = preference;
        break;
      case PreferenceTypeEnum.Mood:
        preferences.mood = preference;
        break;
    }
    this.localStorageService.setObject(
      'preferences',
      preferences
    );
  }
}
