import { HemisphereType } from './hemisphere.type';
import { LanguageType } from './language.type';
import { CritterType } from './critter.type';
import { ModeType } from './mode.type';

export interface PreferencesInterface {
  autoplay: boolean;
  display: CritterType;
  hemisphere: HemisphereType;
  language: LanguageType;
  mode: ModeType;
  mood: number;
}
