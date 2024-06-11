import { IVillain } from '../Books';
import { Type } from './IShortsResponse';

export interface IShorts {
  id: number;
  title: string;
  type: Type;
  handle: string;
  originallyPublishedIn: string;
  collectedIn: string;
  notes: string[];
  year: number;
  created_at: Date;
  villains: IVillain[];
}
