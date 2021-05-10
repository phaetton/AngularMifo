import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentoradosService } from '../mentorados.service';
import { Mentorado } from '../models/mentorado.model';

@Component({
  selector: 'app-lista-mentorados',
  templateUrl: './lista-mentorados.component.html',
  styleUrls: ['./lista-mentorados.component.scss']
})
export class ListaMentoradosComponent implements OnInit {
  mentorados: Mentorado[];
  constructor(
    private mentoradosservice: MentoradosService,
    private activatedroute: ActivatedRoute
  ) { }

  //obtenemos la lista de mentorados de un mentor especifico
  ngOnInit(): void {
    this.activatedroute.parent.params.subscribe(async params => {
      this.mentorados = await this.mentoradosservice.getByMentor(parseInt(params.mentorId));
    });
  }

}
