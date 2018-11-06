import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoliceComponent } from './police/police.component';
import { PoliceDepartmentComponent } from './police-department/police-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { PoliceDetailComponent } from './police-detail/police-detail.component';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    PoliceComponent,
    PoliceDepartmentComponent,
    DashboardComponent,
    SearchbarComponent,
    MessagesComponent,
    HeaderComponent,
    PoliceDetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
