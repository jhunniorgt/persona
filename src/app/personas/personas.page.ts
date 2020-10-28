import { Component, OnInit } from "@angular/core";
import { PersonasService } from "./personas.service";
import { Router } from '@angular/router';
import { Persona } from './personas.model';
@Component({
  selector: "app-personas",
  templateUrl: "./personas.page.html",
  styleUrls: ["./personas.page.scss"]
})
export class PersonasPage implements OnInit {
  personas: Persona[];

  constructor(private personasService: PersonasService, private router: Router) {}

  ngOnInit() {
    this.personas = this.personasService.getPersonas();
  }

  ionViewWillEnter() {
    this.personas = this.personasService.getPersonas();
  }

  addNewPersona() {
    this.router.navigate(['/new-persona']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
