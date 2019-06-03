import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = [];
  telefone = [];
  emailCadastrado = "";
  telefoneCadastrado = "";

  constructor() {

  }

  onClickMe() {
    if (this.emailCadastrado in this.email) {

      alert("Email já cadastrado");
      return;
    }
    if (this.telefoneCadastrado in this.telefone) {
      alert("Telefone já cadastrado");
      return;
    }

    this.email.push(this.emailCadastrado);
    this.telefone.push(this.telefoneCadastrado);
    alert("Show!");
  }

  ngOnInit() {
  }

}
