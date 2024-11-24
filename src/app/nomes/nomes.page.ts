import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importe NgForm

@Component({
  selector: 'app-nomes',
  templateUrl: './nomes.page.html',
  styleUrls: ['./nomes.page.scss'],
})
export class NomesPage {
  nome: string = '';
  numero: string = '';

  // Método onSubmit agora aceita um parâmetro 'form' do tipo NgForm
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulário enviado com sucesso!');
      console.log('Nome:', this.nome);
      console.log('Número:', this.numero);
    } else {
      console.log('O formulário não é válido!');
    }
  }

  // Função para validar o número de celular (opcional, pode ser ajustada)
  isValidPhoneNumber(phone: string): boolean {
    const phonePattern = /^[0-9]{10,11}$/;
    return phonePattern.test(phone);
  }
}



