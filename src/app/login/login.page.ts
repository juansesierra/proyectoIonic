import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.createLoginForm();
   }

  ngOnInit() {
  }

  public onSubmit(){
    console.log(this.loginForm.value);
  }

  private createLoginForm(){
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
