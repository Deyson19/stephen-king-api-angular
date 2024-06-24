import { AfterViewInit, Component } from '@angular/core';
import { SpinnerComponent } from '@shared/spinner/spinner.component';
import { VillainsTableComponent } from '../../components/villains-table/villains-table.component';

@Component({
  standalone: true,
  imports: [SpinnerComponent, VillainsTableComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2800);
  }
  isLoading = true;
  mensaje = 'Cargando listado de villanos';

  tablaLista(x: boolean) {
    if (x) {
      setTimeout(() => {
        this.isLoading = false;
      }, 1700);
      return;
    }

    this.mensaje = 'La tabla no está lista o no hay registros para mostrar';
    this.isLoading = true;
  }
}
