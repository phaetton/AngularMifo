import { Injectable } from '@angular/core';
import { MENTORADOS } from "./db/mentorados.db";
import { Mentorado } from './models/mentorado.model';

@Injectable({
  providedIn: 'root'
})
export class MentoradosService {

  constructor() { }

  getByMentor(mentorId): Promise<Mentorado[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = MENTORADOS.filter(mentorado => {
        return mentorado.mentor === mentorId;
      });
      resolve(arrFiltrado);
    });
  }
}
