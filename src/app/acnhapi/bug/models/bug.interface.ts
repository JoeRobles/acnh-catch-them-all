import { NameInterface } from '../../models/name.interface';
import { AvailabilityInterface } from '../../models/availability.interface';

export interface BugInterface {
  id: number;
  availability: AvailabilityInterface;
  catch: boolean;
  catchPhrase: string;
  fileName: string;
  iconUri: string;
  imageUri: string;
  museumPhrase: string;
  name: NameInterface;
  price: number;
  priceFlick: number;
}
