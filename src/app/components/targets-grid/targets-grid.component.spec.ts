import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsGridComponent } from './targets-grid.component';

describe('TargetsGridComponent', () => {
  let component: TargetsGridComponent;
  let fixture: ComponentFixture<TargetsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
