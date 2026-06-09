import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-character-tank',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-tank.html',
  styleUrl: './character-tank.css'
})
export class CharacterTank implements OnInit {

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this._characterService.getTankCharacters().subscribe(result => {
      this.characters = result;
    });

    console.log(this.characters);
  }

}