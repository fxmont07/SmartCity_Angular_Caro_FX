import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private route: Router) {
    this.form = this.createFormGroup();
  }

  ngOnInit() {
    console.log('current url' + this.route.url);
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
}
