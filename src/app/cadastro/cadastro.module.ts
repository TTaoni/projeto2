import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- Importando ReactiveFormsModule aqui
import { IonicModule } from '@ionic/angular';
import { CadastroPage } from './cadastro.page';
import { CadastroPageRoutingModule } from './cadastro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // <-- Aqui estamos importando o ReactiveFormsModule para o módulo da página
    IonicModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}

