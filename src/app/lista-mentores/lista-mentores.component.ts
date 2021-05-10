import { Component, OnInit } from '@angular/core';
import { MentoresService } from '../mentores.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-lista-mentores',
  templateUrl: './lista-mentores.component.html',
  styleUrls: ['./lista-mentores.component.scss']
})
export class ListaMentoresComponent implements OnInit {

  arrMentores: Mentor[];

  constructor(private mentoresservice: MentoresService) { }

  async ngOnInit() {
    this.arrMentores = await this.mentoresservice.getAllPromise();
  }

  async onchange($event) {
    if ($event.target.value === 'Todos') {
      this.arrMentores = await this.mentoresservice.getAllPromise();
    } else {
      this.arrMentores = await this.mentoresservice.getByOficina($event.target.value);
    }
  }
}
