import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderLineComponent } from './detail-order-line.component';

describe('DetailOrderLineComponent', () => {
  let component: DetailOrderLineComponent;
  let fixture: ComponentFixture<DetailOrderLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOrderLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrderLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
