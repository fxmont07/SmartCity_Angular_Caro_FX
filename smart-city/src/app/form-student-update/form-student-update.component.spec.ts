import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentUpdateComponent } from './form-student-update.component';

describe('FormStudentUpdateComponent', () => {
  let component: FormStudentUpdateComponent;
  let fixture: ComponentFixture<FormStudentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStudentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
