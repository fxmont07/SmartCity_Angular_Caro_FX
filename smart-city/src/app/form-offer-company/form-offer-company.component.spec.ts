import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfferCompanyComponent } from './form-offer-company.component';

describe('FormOfferCompanyComponent', () => {
  let component: FormOfferCompanyComponent;
  let fixture: ComponentFixture<FormOfferCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfferCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOfferCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
