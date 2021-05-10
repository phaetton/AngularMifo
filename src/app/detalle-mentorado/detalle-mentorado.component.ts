import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentoradosService } from '../mentorados.service';
import { Mentorado } from '../models/mentorado.model';

@Component({
  selector: 'app-detalle-mentorado',
  templateUrl: './detalle-mentorado.component.html',
  styleUrls: ['./detalle-mentorado.component.scss']
})
export class DetalleMentoradoComponent implements OnInit {
mentorado:Mentorado
  constructor(
    private activatedroute: ActivatedRoute,
    private mentoradosservice:MentoradosService
  ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(async params=>{
      this.mentorado=await this.mentoradosservice.getById(parseInt(params.mentoradoId));
    })
  }

}
