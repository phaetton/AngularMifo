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

  ngOnInit(): void {
    this.mentoresservice.getAllPromise()
      .then(mentores => {
        this.arrMentores = mentores;
      });
  }

}
