import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop', items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar'
          },
          {
            label: 'No Counes',
            icon: 'pi pi-globe'
          }
        ]
      },
      {
        label: 'Pipes Personalizados', icon: 'pi pi-cog', items: [
          {
            label: 'Otro Elemento',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];
  }

}
