export interface Region {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: Status;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: RegionEnum;
  subregion: Subregion;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  borders?: string[];
  gini?: { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  spa?: SPA;
  eng?: EngEnum;
  nld?: string;
  grn?: string;
  fra?: string;
  por?: string;
  pap?: string;
  bjz?: string;
  jam?: string;
  aym?: string;
  que?: string;
  hat?: string;
  kal?: string;
}

export enum EngEnum {
  English = 'English',
}

export enum SPA {
  Spanish = 'Spanish',
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum RegionEnum {
  Americas = 'Americas',
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
}

export enum Subregion {
  Caribbean = 'Caribbean',
  CentralAmerica = 'Central America',
  NorthAmerica = 'North America',
  SouthAmerica = 'South America',
}
