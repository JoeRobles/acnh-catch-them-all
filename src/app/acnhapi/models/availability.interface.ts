import { CritterLocationsType } from '../../shared/models/critter-locations.type';

export interface AvailabilityInterface {
  isAllDay: boolean;
  isAllYear: boolean;
  location: CritterLocationsType;
  monthArrayNorthern: number[];
  monthArraySouthern: number[];
  monthNorthern: string;
  monthSouthern: string;
  rarity: string;
  time: string;
  timeArray: number[];
}
