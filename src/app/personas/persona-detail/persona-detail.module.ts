import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaDetailPageRoutingModule } from './persona-detail-routing.module';

import { PersonaDetailPage } from './persona-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaDetailPageRoutingModule
  ],
  declarations: [PersonaDetailPage]
})
export class PersonaDetailPageModule {}
