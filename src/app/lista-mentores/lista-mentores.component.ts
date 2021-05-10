import { Component, OnInit } from '@angular/core';
import { MentoresService } from '../mentores.service';

@Component({
  selector: 'app-lista-mentores',
  templateUrl: './lista-mentores.component.html',
  styleUrls: ['./lista-mentores.component.scss']
})
export class ListaMentoresComponent implements OnInit {

  constructor(private mentoresservice:MentoresService) { }

  ngOnInit(): void {
    const mentores=this.mentoresservice.getAll();
console.log(mentores);
  }

}
