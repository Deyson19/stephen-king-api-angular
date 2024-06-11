import { IShorts } from './IShorts';

export interface IShortsResponse {
  data: IShorts[];
}

export enum Type {
  Novella = 'novella',
  Play = 'play',
  Poem = 'poem',
  Screenplay = 'screenplay',
  ShortStory = 'short story',
  Teleplay = 'teleplay',
}
