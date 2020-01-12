import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-company',
  templateUrl: './nav-bar-company.component.html',
  styleUrls: ['./nav-bar-company.component.css']
})
export class NavBarCompanyComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  isLog() {
    this.authService.getRole() != null;
  }

}
