import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RouterEvent, Router } from '@angular/router';
import { LoginDTO, TokenDTO } from '../api/models';
import { LoginService } from '../api/services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginModel: LoginDTO;
  error: string;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService) {
    this.form = this.createFormGroup();
  }

  ngOnInit() {
      this.error ="";
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      )
    });
  }

  login() {
    this.loginModel = this.form.value;
    this.loginService.postLogin(this.loginModel)
      .subscribe(
        (token: TokenDTO) => {

        this.saveToken(token);
        this.authService.manageToken(token.accessToken);
        if (this.authService.getRole() == "Company") {
          this.updateRoute("/companyoffer");
        } else {
          this.updateRoute("/companies");
        }
      },
      error => {
        this.error = error["error"];
      },
      );
    }

  private saveToken(token: TokenDTO): void {
    this.authService.setToken(token);
  }

  private updateRoute(route) {
    this.router.navigate([route]);
  }

  logOut() {
    this.authService.logOut();
    this.updateRoute("/login");
  }
}
