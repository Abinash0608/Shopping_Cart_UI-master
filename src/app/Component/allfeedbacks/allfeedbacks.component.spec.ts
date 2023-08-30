import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfeedbacksComponent } from './allfeedbacks.component';

describe('AllfeedbacksComponent', () => {
  let component: AllfeedbacksComponent;
  let fixture: ComponentFixture<AllfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
