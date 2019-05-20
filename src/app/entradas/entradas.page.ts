import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  entradas_form: FormGroup;

  constructor(private fb: FormBuilder) {
      this.entradas_form = this.create_entradas_form();
  }

  ngOnInit() {
  }

  public onSubmit(){
    console.log(this.entradas_form.value);
  }

  private create_entradas_form(){
    return this.fb.group({
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }
}
