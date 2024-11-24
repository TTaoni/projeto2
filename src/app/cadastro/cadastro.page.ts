import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private toastController: ToastController
  ) {
    // Inicializa o formGroup com validações
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  async cadastro() {
    if (this.formGroup.invalid) {
      // Exibe mensagem se o formulário for inválido
      const toast = await this.toastController.create({
        message: 'Preencha todos os campos corretamente.',
        duration: 2000,
      });
      toast.present();
      return;
    }

    // Obtém os valores do formulário
    const { email, senha } = this.formGroup.value;

    try {
      // Chama o serviço para cadastro (substitua com sua lógica de cadastro)
      await this.authService.cadastroNoFirebase(email, senha);

      // Redireciona para a página de login
      this.router.navigate(['/login']);
      
      // Exibe mensagem de sucesso
      const toast = await this.toastController.create({
        message: 'Cadastro realizado com sucesso!',
        duration: 2000,
      });
      toast.present();
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      // Exibe mensagem de erro
      const toast = await this.toastController.create({
        message: 'Erro ao realizar cadastro. Tente novamente.',
        duration: 2000,
      });
      toast.present();
    }
  }
}
