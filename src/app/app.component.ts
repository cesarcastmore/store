import { Component, OnInit } from '@angular/core';
import { menus } from './data/menus';
import { Menu } from './models/menu';
import {ToastService} from './services/toast.service';

import {Observable, Observer} from 'rxjs';

//Estoy importanta la contante que tendra las configraciones que cambiaran mi estilo de la aplicacion 
import { configuration } from './data/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  //Estoy iniciando esta variable para utilizar en la platilla html
  configuration= configuration;

  list_menus: Menu[] = menus;

  isOpen: boolean=false;

  title = 'store';
  constructor(public _toastService: ToastService){

  }

  ngOnInit(): void {


    let cambios: Observable<number>= this.createObservable();

    console.log("INICIO");
    cambios.subscribe(value=> console.log(value));
    console.log("FIN");





  }


  public createObservable(): Observable<number>{

    return Observable.create((observer: Observer<number>)=> {

      let contador: number=0

      setTimeout(()=>{
        contador +=1;
        observer.next(contador)

      }, 1000);


      setTimeout(()=>{
        contador +=1;
        observer.next(contador)

      }, 2000);


      setTimeout(()=>{
        contador +=1;
        observer.next(contador)

      }, 4000);


      setTimeout(()=>{
        observer.complete()

        console.log("termine");

      }, 5000);

    })


  }


  open(){

    this.isOpen= !this.isOpen;

  }


  

}
