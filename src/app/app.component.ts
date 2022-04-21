import { Component } from '@angular/core';
import { menus } from './data/menus';
import { Menu } from './models/menu';
import {ToastService} from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list_menus: Menu[] = menus;

  title = 'store';
  constructor(public _toastService: ToastService){

  }


  

}
