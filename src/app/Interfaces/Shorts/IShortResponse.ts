import { IShorts } from './IShorts';

export interface IShortResponse {
  data: IShorts;
}

export enum Type {
  Novella = 'novella',
  Play = 'play',
  Poem = 'poem',
  Screenplay = 'screenplay',
  ShortStory = 'short story',
  Teleplay = 'teleplay',
}
