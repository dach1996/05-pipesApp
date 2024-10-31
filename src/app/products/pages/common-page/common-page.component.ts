import { Component } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {
  changeClient() {
    this.name = 'Melisa';
    this.gender = 'Female';
  }

  public invatationMap ={
    'Male':'Invitarlo',
    'Female':'Invitarla'
  }

  public name: string = 'Fernando';
  public gender: 'Male' | 'Female' = 'Male';


}
