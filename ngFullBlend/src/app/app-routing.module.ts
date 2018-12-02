import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign', component: SignComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '404', component: Nf404Component },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
