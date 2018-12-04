import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcorreoComponent } from './agregarcorreo.component';

describe('AgregarcorreoComponent', () => {
  let component: AgregarcorreoComponent;
  let fixture: ComponentFixture<AgregarcorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
