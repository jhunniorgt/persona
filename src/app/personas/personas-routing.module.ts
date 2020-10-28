import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasPage } from './personas.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasPage
  },
  {
    path: 'persona-detail',
    loadChildren: () => import('./persona-detail/persona-detail.module').then( m => m.PersonaDetailPageModule)
  },
  {
    path: 'persona-add',
    loadChildren: () => import('./persona-add/persona-add.module').then( m => m.PersonaAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasPageRoutingModule {}
