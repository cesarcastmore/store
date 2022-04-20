import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCartComponent } from './buttons-cart.component';

describe('ButtonsCartComponent', () => {
  let component: ButtonsCartComponent;
  let fixture: ComponentFixture<ButtonsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
