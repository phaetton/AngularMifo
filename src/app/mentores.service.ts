import { Injectable } from '@angular/core';
//simulamos la base de datos
import { MENTORES } from "./db/mentores.db";
import { Mentor } from './models/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentoresService {

  constructor() { }

  //acciones a realizar sobre la base de datos

  getAll(): Mentor[] {
    return MENTORES;
  }
}
