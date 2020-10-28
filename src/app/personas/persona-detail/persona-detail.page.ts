import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {  PersonasService } from '../personas.service';
import { AlertController } from "@ionic/angular";
import { Persona } from '../personas.model';

@Component({
  selector: "app-persona-detail",
  templateUrl: "./persona-detail.page.html",
  styleUrls: ["./persona-detail.page.scss"]
})
export class PersonaDetailPage implements OnInit {
  persona: Persona;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personasService: PersonasService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("personaId")) {
        // redirect
        this.router.navigate(['/personas']);
      }
      const recipeId = paramMap.get("personaId");
      this.persona = this.personasService.getPersona(recipeId);
    });
  }

  async deletePersona() {
    const alertElment = await this.alertCtrl.create({
      header: "Atencion  ",
      message: "Esta seguro de eliminar la persona?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Eliminar",
          handler: () => {
            this.personasService.deletePersona(this.persona.id);
            this.router.navigateByUrl("/personas");
          }
        }
      ]
    });
    await alertElment.present();
  }
}
