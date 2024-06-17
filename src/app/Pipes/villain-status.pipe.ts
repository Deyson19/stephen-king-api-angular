import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../Interfaces/Villains/IVillainsResponse';

@Pipe({
  name: 'villain_status',
  standalone: true,
})
export class VillainStatusPipe implements PipeTransform {
  transform(value: string): string {
    if (value === Status.Alive) {
      return 'Vivo';
    } else {
      return 'Muerto';
    }
  }
}
