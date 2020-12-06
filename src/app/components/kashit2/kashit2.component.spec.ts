import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kashit2Component } from './kashit2.component';

describe('Kashit2Component', () => {
  let component: Kashit2Component;
  let fixture: ComponentFixture<Kashit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kashit2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kashit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
