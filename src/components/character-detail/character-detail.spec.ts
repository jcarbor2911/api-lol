import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { CharacterDetail } from './character-detail';
import { CharacterService } from '../../services/character-service';

describe('CharacterDetail', () => {
  let component: CharacterDetail;
  let fixture: ComponentFixture<CharacterDetail>;

  // Simulador del servicio de personajes
  const mockCharacterService = {
    getCharacterById: (id: string) => of({
      id: id,
      name: 'Test',
      title: 'Título Test',
      role: 'Mago',
      imageUrl: '',
      lore: 'Historia de prueba',
      stats: []
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetail],
      providers: [
        // Simulamos la ruta activa con un ID cualquiera (ej: '1')
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' })
            }
          }
        },
        // Inyectamos el simulador del servicio
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