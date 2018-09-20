import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCorreoComponent } from './ingresar-correo.component';

describe('IngresarCorreoComponent', () => {
  let component: IngresarCorreoComponent;
  let fixture: ComponentFixture<IngresarCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
