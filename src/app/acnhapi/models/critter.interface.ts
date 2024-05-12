import { AvailabilityInterface } from './availability.interface';
import { NameInterface } from './name.interface';

export interface CritterInterface {
  id: number;
  availability: AvailabilityInterface;
  catch: boolean;
  catchPhrase: string;
  donated: boolean;
  fileName: string;
  iconUri: string;
  imageUri: string;
  museumPhrase: string;
  name: NameInterface;
  price: number;
  threeOfAKind: boolean;
}
