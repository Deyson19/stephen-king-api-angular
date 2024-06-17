import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IShorts } from '@interfaces';
import { ShortsService } from '@services/shorts.service';
import { SpinnerComponent } from '@shared/spinner/spinner.component';
import { ShortTypePipe } from '../../../Pipes/short-type.pipe';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    SpinnerComponent,
    ShortTypePipe,
    CommonModule,
    MatIcon,
    MatButton,
    RouterModule,
  ],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  private shortsService = inject(ShortsService);
  private router = inject(Router);
  private activateRoute = inject(ActivatedRoute);
  mensaje = 'Cargando información del Short';
  isLoading = true;
  short?: IShorts;

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.shortsService.getById(Number.parseInt(id!)).subscribe(
      (resp) => {
        if (resp.data) {
          this.short = resp.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 1500);
        }
      },
      (isError: HttpErrorResponse) => {
        this.router.navigateByUrl('/shorts');
      }
    );
  }
}
