import { PreferenceTypeEnum } from './preference-type.enum';

export type PreferenceType =
  PreferenceTypeEnum.Autoplay |
  PreferenceTypeEnum.Display |
  PreferenceTypeEnum.Hemisphere |
  PreferenceTypeEnum.Language |
  PreferenceTypeEnum.Mode |
  PreferenceTypeEnum.Mood;
