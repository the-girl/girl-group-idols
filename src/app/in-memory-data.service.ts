import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Idol } from './idol';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const idols = [
      { id: 1, name: '지수', company: 'yg', imageUrl: 'https://s3.namuwikiusercontent.com/s/ddddce71fe8780f4ba8660da5bc150457a8e840330c9136325db0ebc9a5776cbb39323a14b34c77058db7b41ad778a3a37cec9a9c2aa4046aaddb84d5f3c463d5199dcaa8eaeec26b328678d6c2386720686fab62970400016b287900050a2a9' },
      { id: 2, name: '제니', company: 'yg', imageUrl: 'https://s3.namuwikiusercontent.com/s/8ba1f474bcdd0b5cc3bc6ffae9b8a3f3d5e2907ed3b262d3d071e5c8c3c170935ad288d08b767e6648d3fa61c5ec9f9f225c7041ec92430b8d5ef82393d4c20e690f0db794458b95f5be3fc3c5c23559944d7185539c7fa17c8ca5911302f14d' },
      { id: 3, name: '로제', company: 'yg', imageUrl: 'https://s3.namuwikiusercontent.com/s/546a475984d40713bfb2fdf76dd04a8d5606dcbe531dc25b5329c2f835cf33d7f4f5301be9c589a8f87805dad1373b70604a6752b7f7811c3063247dce6fe27d31b9915e200711d4ff1072eab6f5d9812c9af359c9a399e4ea18b4dc647221e2' },
      { id: 4, name: '리사', company: 'yg', imageUrl: 'https://s3.namuwikiusercontent.com/s/d4d804ff7d34ddcfd35d8442c7992bf9751a492c03c3c0a10b02af9326dcf934c0e9b15623b6687d447f98c6b0ccbf67f31e08534a6bdecfaf11cd88c257b9e93c36bb4276f72d95cffc2cccbbef42e21f106d5ec9116c5dd051959df3ec6722' },
      { id: 5, name: '모모', company: 'jyp', imageUrl: '' },
      { id: 6, name: '사나', company: 'jyp', imageUrl: '' },
    ];
    return { idols };
  }

  genId(idols: Idol[]): number {
    return idols.length > 0 ? Math.max(...idols.map(idol => idol.id)) + 1 : 11;
  }
}
