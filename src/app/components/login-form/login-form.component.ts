import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = 'login';
  firstName: string = '';
  lastName: string = '';
  login: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onLoginTab(): void {
    this.active = 'login';
  }

  onRegisterTab(): void {
    this.active = 'register';
  }

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      login: this.login,
      password: this.password,
    });
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      password: this.password,
    });
  }
}
