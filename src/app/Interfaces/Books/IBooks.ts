import { IVillain } from './IVillain';

export interface IBooks {
  id: number;
  Year: number;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: Date;
  villains: IVillain[];
}
