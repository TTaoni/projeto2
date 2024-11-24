import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from "../services/autenticacao.service";
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string = ""; // Armazena o email do usuário.
  public senha: string = ""; // Armazena a senha do usuário.
  public mensagem: string = ""; // Armazena mensagens de erro ou sucesso.

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private toastController: ToastController
  ) {}

  // Método para realizar o login do usuário.
  async loginUsuario() {
    if (!this.email || !this.senha) {
      // Validação simples para verificar se os campos estão preenchidos.
      this.mensagem = "Por favor, preencha todos os campos.";
      await this.exibeMensagem();
      return;
    }

    try {
      const res = await this.authService.loginNoFirebase(this.email, this.senha);
      console.log("res = ", res);
      this.router.navigate(["/tabs/tab1"]); // Redireciona para a página inicial.
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      this.mensagem = "Erro ao fazer login do usuário.";
      await this.exibeMensagem();
    }
  }

  // Método para exibir mensagens como toast.
  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
    });
    toast.present();
  }

  // Método para navegar para a página de cadastro.
  cadastroPage() {
    this.router.navigate(["/cadastro"]);
  }

  ngOnInit() {}
}
