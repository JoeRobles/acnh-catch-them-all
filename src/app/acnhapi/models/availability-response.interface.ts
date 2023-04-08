export interface AvailabilityResponseInterface {
  isAllDay: boolean;
  isAllYear: boolean;
  location: string;
  'month-array-northern': number[],
  'month-array-southern': number[],
  'month-northern': string;
  'month-southern': string;
  rarity: string;
  time: string;
  'time-array': number[]
}
