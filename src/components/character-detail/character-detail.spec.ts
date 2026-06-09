import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { CharacterDetail } from './character-detail';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

describe('CharacterDetail', () => {
  let component: CharacterDetail;
  let fixture: ComponentFixture<CharacterDetail>;

  // Simulador adaptado al constructor real de tu clase Character
  const mockCharacterService = {
    getCharacterById: (id: string) => of(
      new Character(
        id,
        266,
        'Aatrox',
        'el Espada de los Oscuros',
        ['Luchador', 'Tanque'],
        'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
      )
    )
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' })
            }
          }
        },
        { provide: CharacterService, useValue: mockCharacterService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CharacterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});