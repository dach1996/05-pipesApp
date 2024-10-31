import { Component } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {
  deleteClient() {
    this.clients.pop();
  }
  changeClient() {
    this.name = 'Melisa';
    this.gender = 'Female';
  }

  public invatationMap = {
    'Male': 'Invitarlo',
    'Female': 'Invitarla'
  }

  public name: string = 'Fernando';
  public gender: 'Male' | 'Female' = 'Male';

  public clients: string[] = ['María', 'Perdro', 'Ferando', 'Hernando', 'Meliza'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos 1 cliente esperando',
    'other': "Tenemos # clientes esperando"
  };

}
