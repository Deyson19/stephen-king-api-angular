import { IBook } from './IBook';
import { Gender, Status } from './IVillainsResponse';

export interface IVillain {
  id: number;
  name: string;
  gender: Gender | null;
  status: Status;
  types_id: number;
  notes: string[];
  created_at: Date;
  books: IBook[];
  shorts: IBook[];
}
export interface IVillainByID extends IVillain {
  id: number;
  Year: number;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: Date;
  villains: Villain[];
}

export interface Villain {
  name: string;
  url: string;
}
