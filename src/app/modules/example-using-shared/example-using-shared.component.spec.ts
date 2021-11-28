import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUsingSharedComponent } from './example-using-shared.component';

describe('ExampleUsingSharedComponent', () => {
  let component: ExampleUsingSharedComponent;
  let fixture: ComponentFixture<ExampleUsingSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleUsingSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUsingSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
