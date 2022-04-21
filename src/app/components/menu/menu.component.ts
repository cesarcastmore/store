import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../models/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu = { title: '' };

  constructor(private _router: Router) { 

  }

  ngOnInit(): void {
  }

  openPage() {

    this._router.navigate([this.menu.url]);

  }

}
