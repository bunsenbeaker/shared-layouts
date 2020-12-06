import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kashit1Component } from './kashit1.component';

describe('Kashit1Component', () => {
  let component: Kashit1Component;
  let fixture: ComponentFixture<Kashit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kashit1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kashit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
