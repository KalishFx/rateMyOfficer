import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliceComponent }      from './police/police.component';



const routes: Routes = [
  { path: 'police', component: PoliceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
