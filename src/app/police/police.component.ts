import { Component, OnInit } from '@angular/core';
import { Police } from '../police';
//import { POLICES } from '../mock-police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
  polices: Police[];
  selectedPolice: Police;
  
  onSelect(police: Police): void {
  this.selectedPolice = police;
}

getPolices(): void {
  this.policeService.getPolices()
  .subscribe(polices => this.polices = polices);
}
  constructor(private policeService: PoliceService) { }

  ngOnInit() {
    this.getPolices();
  }

}
