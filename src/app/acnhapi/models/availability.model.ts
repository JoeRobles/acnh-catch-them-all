import { AvailabilityResponseInterface } from './availability-response.interface';
import { AvailabilityInterface } from './availability.interface';
import { CritterLocationsType } from './critter-locations.type';
import { CritterRarityType } from './critter-rarity.type';

export class AvailabilityModel implements AvailabilityInterface {
  monthNorthern: string;
  monthSouthern: string;
  time: string;
  isAllDay: boolean;
  isAllYear: boolean;
  location: CritterLocationsType;
  rarity: CritterRarityType;
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
    this.rarity = availability.rarity as CritterRarityType;
    this.monthArrayNorthern = availability['month-array-northern'];
    this.monthArraySouthern = availability['month-array-southern'];
    this.timeArray = availability['time-array'];
  }

}
