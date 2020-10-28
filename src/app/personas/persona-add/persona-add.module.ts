import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaAddPageRoutingModule } from './persona-add-routing.module';

import { PersonaAddPage } from './persona-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaAddPageRoutingModule
  ],
  declarations: [PersonaAddPage]
})
export class PersonaAddPageModule {}
