import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinCorreoComponent } from './sin-correo.component';

describe('SinCorreoComponent', () => {
  let component: SinCorreoComponent;
  let fixture: ComponentFixture<SinCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
