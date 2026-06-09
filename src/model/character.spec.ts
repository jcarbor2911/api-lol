import { Character } from './character';

describe('Character', () => {
  it('should create an instance', () => {
    // Le pasamos unos datos de ejemplo para que TypeScript compile sin errores
    expect(new Character(
      '1',
      266,
      'Aatrox',
      'el Espada de los Oscuros',
      ['Luchador', 'Tanque'],
      'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
    )).toBeTruthy();
  });
});