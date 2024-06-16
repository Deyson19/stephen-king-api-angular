import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortsService } from '@services/shorts.service';
import { SpinnerComponent } from '@shared/spinner/spinner.component';
import { IShorts } from '@interfaces';
import { tap } from 'rxjs';
import { ShortCardComponent } from '../../components/short-card/short-card.component';
@Component({
  standalone: true,
  imports: [SpinnerComponent, ShortCardComponent, CommonModule],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  private _shortsService = inject(ShortsService);
  public mostrarSpinner = true;
  mensaje = 'Cargando el listado de Shorts';
  shortsList: IShorts[] = [];

  ngOnInit(): void {
    this._shortsService
      .getAll()
      .pipe(tap(() => (this.mostrarSpinner = false)))
      .subscribe((shorts) => {
        this.shortsList = shorts.data;
      });
  }
  displayedColumns: string[] = [
    'id',
    'title',
    'type',
    'year',
    'collectedIn',
    'created_at',
  ];
}
