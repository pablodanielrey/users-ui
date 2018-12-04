import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveModificadaComponent } from './clave-modificada.component';

describe('ClaveModificadaComponent', () => {
  let component: ClaveModificadaComponent;
  let fixture: ComponentFixture<ClaveModificadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaveModificadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaveModificadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
