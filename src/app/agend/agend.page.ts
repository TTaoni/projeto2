import { Component } from '@angular/core';

@Component({
  selector: 'app-agend',
  templateUrl: './agend.page.html',
  styleUrls: ['./agend.page.scss'],
})
export class AgendPage {
  today: string = new Date().toISOString(); // Propriedade para a data mínima no ion-datetime
  selectedTime: string | null = null; // Horário selecionado

  constructor() {}

  // Função para selecionar o horário
  selectTime(time: string) {
    this.selectedTime = time;
    console.log('Horário selecionado:', this.selectedTime);
  }

  // Navegar para a próxima etapa
  goNext() {
    if (this.selectedTime) {
      console.log('Ir para a próxima etapa com o horário:', this.selectedTime);
      // Aqui você pode redirecionar para outra página ou realizar uma ação
    } else {
      alert('Por favor, selecione um horário.');
    }
  }

  // Voltar para a etapa anterior
  goBack() {
    console.log('Voltar para a etapa anterior');
    // Aqui você pode implementar a lógica de navegação ou outra ação
  }
}





