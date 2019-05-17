import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

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

  private matchingPassword(password : string, passwordConfirmation : string){

  }

  private createRegisterForm(){
    return this.fb.group({
      name: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      email: new FormControl ('', Validators.compose([Validators.required, Validators.email])),
      dateBirth: new FormControl ('', Validators.required),
      passwordRetry: this.fb.group({
        password: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(8)])),
        passwordConfirmation: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(8)]))
      }, {validator: this.matchingPassword('password', 'passwordConfirmation')})});
  }

}
