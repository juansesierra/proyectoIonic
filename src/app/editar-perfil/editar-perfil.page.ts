import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  editForm : FormGroup;
  usuario: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.editForm = this.createeditForm();
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = usuario;
   }

  ngOnInit() {
  }

  public onSubmit(){
    var editar = this.editForm.value;
    localStorage.setItem('usuario',  JSON.stringify(editar));
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario)
    this.router.navigateByUrl('/perfil');
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

  private createeditForm(){
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
