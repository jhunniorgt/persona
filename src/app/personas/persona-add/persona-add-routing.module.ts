import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaAddPage } from './persona-add.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaAddPageRoutingModule {}
