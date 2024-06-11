import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shared-navbar',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatButtonModule],
  template: `
    <nav class="navbar navbar-expand-lg bg-info" data-bs-theme="dark">
      <div class="container-fluid">
        <span class="navbar-brand">STEPHEN KING -- The API </span>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            @for (item of navbarItems; track item.path) {
            <li class="nav-item">
              <a
                class="nav-link"
                mat-stroked-button
                color="primary"
                [routerLink]="item.path"
              >
                {{ item.name }}
              </a>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  navbarItems: MenuItems[] = [
    {
      path: 'books',
      name: 'Books',
    },
    {
      path: 'shorts',
      name: 'Shorts',
    },
    {
      path: 'villains',
      name: 'Villains',
    },
  ];
}
interface MenuItems {
  path: string;
  name: string;
}
