import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoModificarFotoComponent } from './dialogo-modificar-foto.component';

describe('DialogoModificarFotoComponent', () => {
  let component: DialogoModificarFotoComponent;
  let fixture: ComponentFixture<DialogoModificarFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoModificarFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoModificarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
