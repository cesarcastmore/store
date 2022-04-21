import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  public isActive: boolean = false;
  public message: Message = { message: '', type: '' };


  constructor() {
  }


  public alert(type: string, message: string): void {
    this.message = {
      type: type,
      message: message
    };

    //Segunda opcion
    /*this.message = { 
      type, 
      message
    };*/

    this.isActive = true;

    setTimeout(() =>{
      this.isActive = false;
      this.message = { message: '', type: '' }

    }, 3000 );

  }



}
