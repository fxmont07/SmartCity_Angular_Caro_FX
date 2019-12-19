import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RouterEvent, Router } from '@angular/router';
import { LoginDTO, TokenDTO } from '../api/models';
import { LoginService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginModel: LoginDTO;
  constructor(
    private router: Router,
    private loginService: LoginService) {
    this.form = this.createFormGroup();
  }

  ngOnInit() {

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

  logIn() {
    this.loginModel = this.form.value;
    this.loginService.postLogin(this.loginModel).subscribe((token: TokenDTO) =>

      this.saveToken(token)
      // Local storage pas de délais (dico) string, JSON stringify / parse
      // Session stop apres fermeture navigature
    );

  }

  private saveToken(token: TokenDTO): void {
    localStorage.setItem("Token", JSON.stringify(token));
  }

  //TODO: dans la barre de nav le bouton
  logOut() {
    localStorage.removeItem("Token");
    //Redirect login
  }
}
