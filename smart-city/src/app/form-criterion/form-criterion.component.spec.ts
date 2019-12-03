import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriterionComponent } from './form-criterion.component';

describe('FormCriterionComponent', () => {
  let component: FormCriterionComponent;
  let fixture: ComponentFixture<FormCriterionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCriterionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
