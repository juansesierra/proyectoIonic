import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.createRegisterForm();
   }

  ngOnInit() {
  }

  public onSubmit(){
    console.log(this.registerForm.value);
  }

  private createRegisterForm(){
    return this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.fb.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      })
    });
  }

}
