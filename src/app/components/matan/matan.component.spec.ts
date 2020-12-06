import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatanComponent } from './matan.component';

describe('MatanComponent', () => {
  let component: MatanComponent;
  let fixture: ComponentFixture<MatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
