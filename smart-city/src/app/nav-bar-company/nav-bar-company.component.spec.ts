import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCompanyComponent } from './nav-bar-company.component';

describe('NavBarCompanyComponent', () => {
  let component: NavBarCompanyComponent;
  let fixture: ComponentFixture<NavBarCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
