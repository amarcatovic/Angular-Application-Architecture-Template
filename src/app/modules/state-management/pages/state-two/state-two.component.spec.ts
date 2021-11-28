import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTwoComponent } from './state-two.component';

describe('StateTwoComponent', () => {
  let component: StateTwoComponent;
  let fixture: ComponentFixture<StateTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
