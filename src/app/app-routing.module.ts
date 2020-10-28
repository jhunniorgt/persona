import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "personas", pathMatch: "full" },
  {
    path: "personas",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./personas/personas.module").then(m => m.PersonasPageModule)
      },
      {
        path: ":personaId",
        loadChildren: () =>
          import("./personas/persona-detail/persona-detail.module").then(
            m => m.PersonaDetailPageModule
          )
      }
    ]
  },
  {
    path: "new-persona",
    loadChildren: () =>
      import("./personas/persona-add/persona-add.module").then(
        m => m.PersonaAddPageModule
      )
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

