import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCodigoComponent } from './ingresar-codigo.component';

describe('IngresarCodigoComponent', () => {
  let component: IngresarCodigoComponent;
  let fixture: ComponentFixture<IngresarCodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarCodigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
