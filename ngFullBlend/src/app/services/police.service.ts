import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Police } from '../police'

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  constructor(private http: Http) { }

  // search for police return the results that contains the search term
  findPolice(search: string){
    if (!search.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get(`http://localhost:3000/polices/?name=${search}`).pipe(
      map(res => res.json()));
  }
  
  //get police by ID 
}
