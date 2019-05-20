import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.createLoginForm();
   }

  ngOnInit() {
  }

  public onSubmit(){
    var login = this.loginForm.value;
    var datos = JSON.parse(localStorage.getItem('usuario'));

    if((login['email'] == datos['email']) && (login['password'] == datos['password'])){
      console.log('OK');
      this.router.navigateByUrl('/inicio');
    }
  }

  private createLoginForm(){
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
