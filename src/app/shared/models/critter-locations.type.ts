import { BugLocationsEnum } from './bug-locations.enum';
import { FishLocationsEnum } from './fish-locations.enum';

export type CritterLocationsType =
  BugLocationsEnum.Flying |
  BugLocationsEnum.FlyingByLight |
  BugLocationsEnum.FlyingNearHybridFlowers |
  BugLocationsEnum.FlyingNearWater |
  BugLocationsEnum.HittingRocks |
  BugLocationsEnum.NearTrash |
  BugLocationsEnum.OnBeachRocks |
  BugLocationsEnum.OnFlowers |
  BugLocationsEnum.OnPalmTrees |
  BugLocationsEnum.OnPondsAndRivers |
  BugLocationsEnum.OnRocksAndBushWhenRaining |
  BugLocationsEnum.OnRottenFood |
  BugLocationsEnum.OnTheBeach |
  BugLocationsEnum.OnTheGround |
  BugLocationsEnum.OnTrees |
  BugLocationsEnum.OnTreeStumps |
  BugLocationsEnum.OnVillagers |
  BugLocationsEnum.OnWhiteFlowers |
  BugLocationsEnum.ShakingTrees |
  BugLocationsEnum.Underground |
  BugLocationsEnum.UnderTrees |
  FishLocationsEnum.Pier |
  FishLocationsEnum.Pond |
  FishLocationsEnum.River |
  FishLocationsEnum.RiverClifftop |
  FishLocationsEnum.RiverClifftopPond |
  FishLocationsEnum.RiverMouth |
  FishLocationsEnum.Sea |
  FishLocationsEnum.SeaRainingSnowing;
