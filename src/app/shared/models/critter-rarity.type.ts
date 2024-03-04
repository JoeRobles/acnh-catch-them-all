import { CritterRarityEnum } from './critter-rarity.enum';

export type CritterRarityType =
  CritterRarityEnum.Common |
  CritterRarityEnum.Uncommon |
  CritterRarityEnum.Rare |
  CritterRarityEnum.UltraRare;
