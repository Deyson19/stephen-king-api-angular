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
