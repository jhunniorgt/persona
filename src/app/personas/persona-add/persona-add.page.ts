import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.page.html',
  styleUrls: ['./persona-add.page.scss'],
})
export class PersonaAddPage implements OnInit {

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPersona(title: HTMLInputElement, imageURL: HTMLInputElement, descripcion:HTMLInputElement ) {
   console.log();
    this.personasService.addPersona(title.value,imageURL.value,descripcion.value);
    this.router.navigate(['/personas']);
  }

}
