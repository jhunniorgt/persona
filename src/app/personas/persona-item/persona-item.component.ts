import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../personas.model';

@Component({
  selector: 'app-persona-item',
  templateUrl: './persona-item.component.html',
  styleUrls: ['./persona-item.component.scss'],
})
export class PersonaItemComponent implements OnInit {

  @Input() personaItem: Persona;

  constructor() { }

  ngOnInit() {}

}
