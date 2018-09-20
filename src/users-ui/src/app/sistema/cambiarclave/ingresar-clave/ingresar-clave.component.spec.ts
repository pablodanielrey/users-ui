import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarClaveComponent } from './ingresar-clave.component';

describe('IngresarClaveComponent', () => {
  let component: IngresarClaveComponent;
  let fixture: ComponentFixture<IngresarClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
