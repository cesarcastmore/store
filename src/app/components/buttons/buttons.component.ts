import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() name: string='INFO';


  constructor() { }

  ngOnInit(): void {
  }


  public onChange(event: any): void {
    console.log(event);
  }

}
