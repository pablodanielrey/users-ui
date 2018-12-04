import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoConfirmadoComponent } from './correo-confirmado.component';

describe('CorreoConfirmadoComponent', () => {
  let component: CorreoConfirmadoComponent;
  let fixture: ComponentFixture<CorreoConfirmadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreoConfirmadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
