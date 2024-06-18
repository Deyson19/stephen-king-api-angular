import { IVillainByID } from './IVillain';

export interface IVillainResponse {
  data: IVillainByID;
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
