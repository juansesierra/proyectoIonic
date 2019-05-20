import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.page.html',
  styleUrls: ['./tarjeta-credito.page.scss'],
})
export class TarjetaCreditoPage implements OnInit {

  tarjeta_form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tarjeta_form = this.create_tarjeta_form();
   }

  ngOnInit() {
  }

  public onSubmit(){
    console.log(this.tarjeta_form.value);
  }

  private create_tarjeta_form(){
    return this.fb.group({
      numero: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(16), Validators.pattern('[0-9 ]*')])),
      titular: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')])),
      caducidad: ['', Validators.required],
      cvv: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[0-9 ]*')]))
    });
  }
}
