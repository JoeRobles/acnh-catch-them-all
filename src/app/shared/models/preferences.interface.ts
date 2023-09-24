import { MonthArrayType } from './hemisphere.type';
import { LanguageType } from './language.type';

export interface PreferencesInterface {
  autoplay: boolean;
  hemisphere: MonthArrayType;
  language: LanguageType;
  mood: number;
}
