import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentoresService } from '../mentores.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  mentor: Mentor;
  vermentor:boolean ;
  vermentorado:boolean ;
  textobotonmentor:string;

  constructor(
    private activatedroute: ActivatedRoute,
    private mentoresservice: MentoresService
  ) {

    this.vermentor=true;
    this.vermentorado=true;

  }


   ngOnInit() {
    //obtenemos el id ingresado en la url
    this.activatedroute.params.subscribe(async params => {
      this.mentor = await this.mentoresservice.getById(parseInt(params.mentorId));
      this.vermentor=false;
      this.vermentorado=true;
      this.textobotonmentor="Perfil Mentor";
    })
  }

  onclick(){
    this.vermentorado=!this.vermentorado;
    this.vermentor=!this.vermentor;

    this.textobotonmentor= this.vermentorado ?"Perfil Mentor":"Mentorados";

  }
}
