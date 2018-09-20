import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeosComponent } from './chequeos.component';

describe('ChequeosComponent', () => {
  let component: ChequeosComponent;
  let fixture: ComponentFixture<ChequeosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
