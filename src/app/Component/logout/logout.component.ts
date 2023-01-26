import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
    
  }
  register() {
    if(this.email == '') {
      alert('SVP entrer un email');
      return;
    }
    if(this.password == ''){
      alert('Svp entrer votre mot de passe');
      return;
    }

    this.auth.register(
     this.email ,
     this.password
      );

    this.email = '';
    this.password = '';
  }
}
