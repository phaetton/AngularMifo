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

  //mismo de getall pero como promesa
  getAllPromise(): Promise<Mentor[]> {
    return new Promise((resolve, reject) => {
      resolve(MENTORES);
    })
  }

  getByOficina(pOficina: string): Promise<Mentor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = MENTORES.filter(mentor => {
        return mentor.oficina === pOficina;
      });
      resolve(arrFiltrado);
    });
  }

  getById(mentorId): Promise<Mentor> {
    return new Promise((resolve, reject) => {
      const mentorfound = MENTORES.find(mentor => {
        return mentor.id === mentorId;
      });
      resolve(mentorfound);
    });
  }
}
