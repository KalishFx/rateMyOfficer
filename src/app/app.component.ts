
/**
 * 
 * 
 * 
 *                              COMPONENTS
Basic  functions:

1. search
    return officers (police depts, locations, law enforcement agencies) matching the search string
2. dashboard/landing page
    displays the top police depts by state and city
3. police officer
    [Detail] traits/charateristics of the officer pulled from database
    [visuals] graphs/charts/animations displaying some traits visually (likablity)
4. police department
    list police  officers currently working there
    displays the avg stats/traits/ratings for the dept overall
    displays common patterns, trends and occurences
5. messages/site log
    logs events of the and server/database connections
    logs the events/ execution of functions

**/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Officer';
}
