import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KssComponent } from './kss.component';

describe('KssComponent', () => {
  let component: KssComponent;
  let fixture: ComponentFixture<KssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
