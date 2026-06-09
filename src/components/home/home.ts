import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    // Comprobamos la URL actual para saber si estamos en / o en /role/tank
    const url = this._router.url;

    if (url === '/role/tank') {
      // Si la ruta es /role/tank → mostrar solo tanques
      this._characterService.getTankCharacters().subscribe(result => {
        this.characters = result;
      });
    } else {
      // Ruta normal (/) → mostrar todos los personajes
      this._characterService.getCharacters().subscribe(result => {
        this.characters = result;
      });
    }

    console.log(this.characters);
  }

}