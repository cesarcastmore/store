import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public template: string='Configuracion';

  constructor() { }

  ngOnInit(): void {
  }


  openTemplate(name: string){
    this.template= name;
  }

}
