import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ent2022-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  title = '';

  ngOnInit(): void {
    this.title = 'Ent2022';
  }
}
