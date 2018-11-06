import { Injectable } from '@angular/core';
import { Police } from './police';
import { POLICES } from './mock-police';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  constructor() { }
  getPolices(): Observable<Police[]>{
    return of (POLICES);
  }
}
