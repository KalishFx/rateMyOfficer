import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['../../../assets/scss/_main.scss']
})
export class SignComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

      var $this = $(this),
        label = $this.prev('label');

      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
      } else if (e.type === 'blur') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {

        if ($this.val() === '') {
          label.removeClass('highlight');
        } else if ($this.val() !== '') {
          label.addClass('highlight');
        }
      }

    });

    $('.tab a').on('click', function (e) {

      e.preventDefault();

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      let target = $(this).attr('href');

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(600);

    });
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    //Required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    //Validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email address', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/sign']);
      } else {
        this.flashMessage.show('Something went wrong, try again', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/sign']);
      }
    });

  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      //console.log(data);
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-Success',
          timeout: 3000
        });
        this.router.navigate(['/home']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['/sign']);
      }
    });
  }

}


