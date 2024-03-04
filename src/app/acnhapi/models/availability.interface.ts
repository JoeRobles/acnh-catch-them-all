import { CritterLocationsType } from '../../shared/models/critter-locations.type';
import { CritterRarityType } from '../../shared/models/critter-rarity.type';

export interface AvailabilityInterface {
  isAllDay: boolean;
  isAllYear: boolean;
  location: CritterLocationsType;
  monthArrayNorthern: number[];
  monthArraySouthern: number[];
  monthNorthern: string;
  monthSouthern: string;
  rarity: CritterRarityType;
  time: string;
  timeArray: number[];
}
