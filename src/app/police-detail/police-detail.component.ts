import { Component, OnInit, Input } from '@angular/core';
import { Police } from '../police';
@Component({
  selector: 'app-police-detail',
  templateUrl: './police-detail.component.html',
  styleUrls: ['./police-detail.component.css']
})
export class PoliceDetailComponent implements OnInit {
  @Input() police: Police;

  
  constructor() { }

  ngOnInit() {
  }

}
