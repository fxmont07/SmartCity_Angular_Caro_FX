import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompanyUpdateComponent } from './form-company-update.component';

describe('FormCompanyUpdateComponent', () => {
  let component: FormCompanyUpdateComponent;
  let fixture: ComponentFixture<FormCompanyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompanyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
