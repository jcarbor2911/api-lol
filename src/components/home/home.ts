import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Recomendado si usas directivas
import { RouterModule } from '@angular/router'; // Para navegaciones futuras
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
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe(result => {
      this.characters = result;
    });

    console.log(this.characters);
  }

}