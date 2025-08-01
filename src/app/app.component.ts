import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component'; // si lo usas directamente

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet] // ← agrega RouterOutlet aquí
})
export class AppComponent {}