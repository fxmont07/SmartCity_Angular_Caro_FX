import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfferUpdateComponent } from './form-offer-update.component';

describe('FormOfferUpdateComponent', () => {
  let component: FormOfferUpdateComponent;
  let fixture: ComponentFixture<FormOfferUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfferUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOfferUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
