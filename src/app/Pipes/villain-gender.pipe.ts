import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../Interfaces/Villains/IVillainsResponse';

@Pipe({
  name: 'villain_gender',
  standalone: true,
})
export class VillainGenderPipe implements PipeTransform {
  transform(genderName: string): string {
    switch (genderName) {
      case Gender.Male:
        return 'Masculino';
      case Gender.Female:
        return 'Femenino';
      default:
        return 'No especificado';
    }
  }
}
