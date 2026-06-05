import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail {
  // Objeto simulado preparado para mapear datos desde tu base de datos
  champion = {
    id: 103,
    name: 'Ahri',
    title: 'La Mujer Zorro de Nueve Colas',
    role: 'Mago / Asesino',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    lore: 'Conectada de forma innata al poder latente de Runaterra, Ahri es una vastaya capaz de transformar la magia en orbes de energía pura. Antaño disfrutaba jugando con su presa y manipulando sus emociones antes de devorar su esencia vital, pero ahora, impulsada por un profundo sentimiento de empatía, viaja por el mundo buscando su lugar y su propósito.',
    stats: [
      { name: 'Ataque', value: 3 },
      { name: 'Defensa', value: 4 },
      { name: 'Magia', value: 8 },
      { name: 'Dificultad', value: 5 }
    ]
  };
}