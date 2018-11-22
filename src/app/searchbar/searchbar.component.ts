import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap, debounce
} from 'rxjs/operators';
import { PoliceComponent } from '../police/police.component';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  constructor(private policeService: PoliceService) { }
  
  ngOnInit() {
  }

}
