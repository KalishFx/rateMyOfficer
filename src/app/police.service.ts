import { Injectable } from '@angular/core';
import { Police } from './police';
import { POLICES } from './mock-police';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  constructor(private messagesService: MessagesService) { }
  getPolices(): Observable<Police[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService: fetched heroes');
    return of (POLICES);
  }
  /* GET heroes whose name contains search term
    
    FUNCTION NOT FINISHED!!!!!!
  
  */
  searchHeroes(term: string): Observable<Police[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    //return search
    return of([]);
  }
}
