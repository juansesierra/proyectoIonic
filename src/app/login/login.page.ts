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
    var login = this.loginForm.value;
    var datos = JSON.parse(localStorage.getItem('usuario'));

    if((login['email'] == datos['email']) && (login['password'] == datos['password'])){
      console.log('OK');
    }
  }

  private createLoginForm(){
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
