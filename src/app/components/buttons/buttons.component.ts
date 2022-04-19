import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() name: string='INFO';

  contador: number=0;


  constructor() { }

  ngOnInit(): void {
  }


  public onClick(event: any): void {

    this.contador+=1;



  }

}
