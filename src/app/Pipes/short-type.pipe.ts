import { Type as ShortType } from './../Interfaces/Shorts/IShortResponse';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'shorts_type',
  standalone: true,
})
export class ShortTypePipe implements PipeTransform {
  transform(typeName: string): string {
    switch (typeName) {
      case ShortType.Novella:
        return 'Novela';
      case ShortType.ShortStory:
        return 'Cuento';
      case ShortType.Play:
        return 'Obra de teatro';
      case ShortType.Poem:
        return 'Poesía';
      case ShortType.Screenplay:
        return 'Guion cinematográfico';
      case ShortType.Teleplay:
        return 'Guion televisivo';
      default:
        return 'Desconocido';
    }
  }
}
