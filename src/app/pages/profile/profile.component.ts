import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public template: string='Configuracion';

  //Esto lo vamos a imprimir en la opciones del selector, el name es lo que vera el usuario y el value lo que se
  //guardar en la entidad profile

  public estados: any[] =[
    {value: 'CHIH', name: 'Chihuahua'}, 
    {value: 'MEX',  name: 'Estado de México' },
    {value: 'NL',  name: 'Nuevo Leon' },
    {value: 'JAL',  name: 'Jalisco' }
  ]


  //FormControl, su segundo parametro es un arreglo de validaciones
  public profileForm: FormGroup = new FormGroup({
    full_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    state: new FormControl('MEX') //Esta propiedad es para obtener el estado y le estoy poniendo por defecto estado de mexico
  });

  constructor() {

   }

  ngOnInit(): void {

    console.log("Inicio profle");


    

    //Utilizando nullish https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    //Asignando valores 
    this.profileForm.get('full_name')?.setValue('Cesar Castillo Moreno');
    this.profileForm.get('username')?.setValue('cesar.cast.more')
    this.profileForm.get('email')?.setValue('cesar.cast.more@gmail.com');


    //Detectando los cambios del objecto profile
    this.profileForm.valueChanges.subscribe(profile=>{
      //console.log("cambios", profile );
    });




    //Detectando los cambios de un solo atributo
    this.profileForm.get('username')?.valueChanges.subscribe(username=>{
      console.log("valor de username", username);

    });

  }


  //Estas funciones van hacer tomada en el htmk como variables de solo lectura

  get full_name(){
    return this.profileForm.get('full_name');
  }

  get username(){
    return this.profileForm.get('username');
  }


  get email(){
    return this.profileForm.get('email');
  }


  openTemplate(name: string){
    this.template= name;
  }

  save(){
      console.log("Estoy guardando", this.profileForm.value);

  }

  cancel(){
    //Cancelando los cambios
    this.profileForm.reset();
  }

}
