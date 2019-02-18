import { Injectable } from '@angular/core';

import { Idol } from './idol';
import { IDOLS } from './mock-idols';

@Injectable({
  providedIn: 'root'
})
export class IdolService {

  constructor() { }

  getIdols(): Idol[] {
    return IDOLS;
  }

  getIdol(id: number) {
    return IDOLS.find(idol => idol.id === id);
  }
}
