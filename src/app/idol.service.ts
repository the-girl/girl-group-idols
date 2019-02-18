import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Idol } from './idol';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class IdolService {

  private idolsUrl: string = 'api/idols';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getIdols(): Observable<Idol[]> {
    return this.http.get<Idol[]>(this.idolsUrl)
      .pipe(
        tap(_ => this.log('fetched Idols')),
        catchError(this.handleError<Idol[]>('getIdols', []))
      );
  }

  getIdol(id: number): Observable<Idol> {
    const url = `${this.idolsUrl}/${id}`;
    return this.http.get<Idol>(url)
      .pipe(
        tap(_ => this.log(`fetched Idol id=${id}`)),
        catchError(this.handleError<Idol>(`getIdol id=${id}`))
      );
  }

  updateIdol(idol: Idol): Observable<Idol> {
    // const url = `${this.idolsUrl}/${idol.id}`;
    return this.http.put<Idol>(this.idolsUrl, idol, httpOptions)
      .pipe(
        tap(_ => this.log(`updated Idol id=${idol.id}`)),
        catchError(this.handleError<Idol>(`getIdol id=${idol.id}`))
      );
  }

  private log(message: string): void {
    this.messageService.add(`IdolServie: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO:
      console.error(error);

      // TODO:
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
