import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    //obtenemos el id ingresado en la url
    this.activatedroute.params.subscribe(params=>{
      console.log(params.mentorId);
    })
  }

}
