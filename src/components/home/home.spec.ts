import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { CharacterService } from '../../services/character-service';
import { of } from 'rxjs';

// Mock del servicio para que el test pase correctamente
class MockCharacterService {
  getCharacters() {
    return of([]); // Devuelve un observable con un array vacío por defecto
  }
}

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        { provide: CharacterService, useClass: MockCharacterService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    // Dispara el ngOnInit y la subscripción inicial
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});