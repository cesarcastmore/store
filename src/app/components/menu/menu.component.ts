import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu = { title: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
