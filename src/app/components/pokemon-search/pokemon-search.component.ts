import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  standalone: true,
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class PokemonSearchComponent {
  nombre = '';
  pokemon: Pokemon | null = null;
  error = '';

  constructor(private pokemonService: PokemonService) { }

  buscarPokemon() {
    this.error = '';
    const nombreLimpio = this.nombre.trim().toLowerCase().replace(/<\/?[^>]+>/gi, '');

    if (!nombreLimpio) {
      this.error = 'Por favor, introduce un nombre válido.';
      return;
    }

    const cache = sessionStorage.getItem(nombreLimpio);
    if (cache) {
      this.pokemon = JSON.parse(cache);
      return;
    }

    this.pokemonService.getPokemon(nombreLimpio).subscribe({
      next: async poke => {
        try {
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`;
          poke.imagenBase64 = await this.pokemonService.convertirImagenABase64(imgUrl);
        } catch (error) {
          poke.imagenBase64 = 'assets/imagen-no-disponible.png'; 
        }

        this.pokemon = poke;
        this.error = '';
        sessionStorage.setItem(nombreLimpio, JSON.stringify(poke));
      },
      error: err => {
        this.error = `No se encontró el Pokémon "${nombreLimpio}".`;
        this.pokemon = null;
      }
    });
  }
}
