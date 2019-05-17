import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.createRegisterForm();
   }

  ngOnInit() {
  }

  public onSubmit(){
    var registro = this.registerForm.value;
    localStorage.setItem('usuario',  JSON.stringify(registro));
    this.router.navigateByUrl('/login');
  }

  private matchingPassword(passwordKey: string, confirmPasswordKey: string){
    return(group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value !== confirmPassword.value){
        return {
          mismatchedPasswords: true
        }
      }
    }
  }

  private createRegisterForm(){
    return this.fb.group({
      name: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      email: new FormControl ('', Validators.compose([Validators.required, Validators.email])),
      dateBirth: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(8)])),
      passwordConfirmation: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(8)]))
      }, {validator: this.matchingPassword('password', 'passwordConfirmation')});
  }

}
