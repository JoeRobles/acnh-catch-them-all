import { AvailabilityResponseInterface } from './availability-response.interface';
import { AvailabilityInterface } from './availability.interface';
import { BugLocationsType } from '../../shared/models/bug-locations.type';
import { FishLocationsType } from '../../shared/models/fish-locations.type';
import { CritterLocationsType } from '../../shared/models/critter-locations.type';

export class AvailabilityModel implements AvailabilityInterface {
  monthNorthern: string;
  monthSouthern: string;
  time: string;
  isAllDay: boolean;
  isAllYear: boolean;
  location: CritterLocationsType;
  rarity: string;
  monthArrayNorthern: number[];
  monthArraySouthern: number[];
  timeArray: number[];

  constructor(availability: AvailabilityResponseInterface) {
    this.monthNorthern = availability['month-northern'];
    this.monthSouthern = availability['month-southern'];
    this.time = availability.time;
    this.isAllDay = availability.isAllDay;
    this.isAllYear = availability.isAllYear;
    this.location = availability.location as CritterLocationsType;
    this.rarity = availability.rarity;
    this.monthArrayNorthern = availability['month-array-northern'];
    this.monthArraySouthern = availability['month-array-southern'];
    this.timeArray = availability['time-array'];
  }

}
