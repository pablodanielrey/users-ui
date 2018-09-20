import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveTemporalComponent } from './clave-temporal.component';

describe('ClaveTemporalComponent', () => {
  let component: ClaveTemporalComponent;
  let fixture: ComponentFixture<ClaveTemporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaveTemporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaveTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
