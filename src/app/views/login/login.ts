import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Requestlogin } from '../../resources/models/RequestLogin';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../resources/services/login';


@Component({
  selector: 'app-login',
  imports: [CardModule, InputTextModule, ButtonModule, FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login implements OnInit {

  public requestLogin!: Requestlogin;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new Requestlogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      console.log(data);
    },
      error => {
        console.error(error);
      })
  }
}
