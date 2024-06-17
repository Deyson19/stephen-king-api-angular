import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ViewChild,
  inject,
  output,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { VillainGenderPipe } from '../../../Pipes/villain-gender.pipe';
import { VillainStatusPipe } from '../../../Pipes/villain-status.pipe';
import { VillainsService } from '@services/villains.service';
import { IVillain } from '../../../Interfaces/Villains';

@Component({
  selector: 'app-villains-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginator,
    MatIcon,
    MatButton,
    RouterModule,
    VillainGenderPipe,
    VillainStatusPipe,
  ],
  templateUrl: './villains-table.component.html',
  styleUrl: './villains-table.component.css',
})
export class VillainsTableComponent implements AfterViewInit {
  private villainsService = inject(VillainsService);

  displayedColumns: string[] = [
    'id',
    'name',
    'gender',
    'status',
    'created_at',
    'Actions',
  ];
  villains: IVillain[] = [];
  dataSource = new MatTableDataSource<IVillain>(this.villains);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.obtenerDatos();
  }
  private obtenerDatos() {
    this.villainsService.getAll().subscribe((resp) => {
      if (resp.data) {
        this.villains = resp.data;
        this.dataSource = new MatTableDataSource<IVillain>(this.villains);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
