import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-city';

  constructor(
    private route: Router,
    private authService: AuthService,
    private loginService: LoginService) { }

  isLoginView() {
    return this.route.url == "/login";
  }

  private getRole(): string {
    return this.authService.getRole();
  }

  public isCompany(): boolean {
    return this.getRole() == "Company";
  }

  public isAdmin(): boolean {
    return this.getRole() == "Admin";
  }
}
