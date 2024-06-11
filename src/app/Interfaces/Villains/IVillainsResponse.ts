import { IVillain } from './IVillain';

export interface IVillainsResponse {
  data: IVillain[];
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown',
}

export enum Status {
  Alive = 'Alive',
  Deceased = 'Deceased',
}
