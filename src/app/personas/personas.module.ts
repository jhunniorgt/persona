import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonasPageRoutingModule } from './personas-routing.module';

import { PersonasPage } from './personas.page';
import { PersonaItemComponent } from './persona-item/persona-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonasPageRoutingModule
  ],
  declarations: [PersonasPage, PersonaItemComponent]
})
export class PersonasPageModule {}
