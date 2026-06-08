import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {

  public id: string = '';
  public character?: Character;

  constructor( 
    private _route: ActivatedRoute, 
    private characterService: CharacterService 
  ) { }

  ngOnInit(): void {
    // 1. Capturamos el ID de la URL
    this.id = this._route.snapshot.paramMap.get('id')!; 

    // 2. Consultamos al servicio e inyectamos el resultado dinámicamente
    this.characterService.getCharacterById(this.id).subscribe(result => 
      this.character = result
    );
  }

}