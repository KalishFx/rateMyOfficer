import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../assets/scss/_main.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogOutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/sign']);
    return false;
  }

}
