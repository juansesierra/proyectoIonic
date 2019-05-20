import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  evento: string;
  
  comentarios;

  comentario = new FormControl('', Validators.required);


  constructor(public route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
  }

  ngOnInit() {
     // Comprobamos si viene por url o desde el boton atras
     if (!this.evento && this.route.snapshot.paramMap.get('idEvento')) {
      this.evento = this.route.snapshot.paramMap.get('idEvento');
    }

    // Obtenemos los datos del evento
    if (this.evento) {
      const eventos = JSON.parse(localStorage.getItem('eventos'));
      if (eventos) {
        this.comentarios = eventos.find((element) => element['club'] === this.evento).comentarios; 
      }

      console.log(this.comentarios);
    }
    this.evento = this.route.snapshot.paramMap.get('idEvento');
  }

  addComentario() {
    const eventos = JSON.parse(localStorage.getItem('eventos'));
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log("entroo")
    console.log(this.comentario.value)

    var nuevoComentario = {
      usuario: usuario.name,
      comentario: this.comentario.value
    }
    
    // Añadimos el comentario
    this.comentarios.push(nuevoComentario);

    eventos.find((element) => element['club'] === this.evento).comentarios = this.comentarios;

    localStorage.setItem('eventos', JSON.stringify(eventos));

  }

}