import { Component } from '@angular/core';
import { menus } from './data/menus';
import { Menu } from './models/menu';
import {ToastService} from './services/toast.service';

//Estoy importanta la contante que tendra las configraciones que cambiaran mi estilo de la aplicacion 
import { configuration } from './data/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //Estoy iniciando esta variable para utilizar en la platilla html
  configuration= configuration;

  list_menus: Menu[] = menus;

  isOpen: boolean=false;

  title = 'store';
  constructor(public _toastService: ToastService){

  }


  open(){

    this.isOpen= !this.isOpen;

  }


  

}
