import { AfterViewInit, Component, inject } from '@angular/core';
import { VillainsService } from '@services/villains.service';
import { SpinnerComponent } from '@shared/spinner/spinner.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { IVillainByID } from '../../../Interfaces/Villains/IVillain';
import { MatIcon } from '@angular/material/icon';
import { VillainGenderPipe } from '../../../Pipes/villain-gender.pipe';

@Component({
  standalone: true,
  imports: [
    SpinnerComponent,
    MatSnackBarModule,
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatIcon,
    RouterModule,
    VillainGenderPipe,
  ],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements AfterViewInit {
  private readonly _villainsService = inject(VillainsService);
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _snackBar = inject(MatSnackBar);
  public villain?: IVillainByID;
  isLoading = true;

  ngAfterViewInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this._villainsService.getById(Number.parseInt(id)).subscribe(
        (resp) => {
          if (resp.data) {
            this.villain = resp.data;
            setTimeout(() => {
              this.isLoading = false;
            }, 1700);
          } else {
            this.errorOcurred();
          }
        },
        (isError: HttpErrorResponse) => {
          this._snackBar.open(isError.error.error, 'Ok');
          this._snackBar.open('Ocurrió un error en la consulta', 'Ok', {
            duration: 3000,
          });
          this.errorOcurred();
        }
      );
    }
  }
  private errorOcurred() {
    this._router.navigate(['/villains']);
  }
}
