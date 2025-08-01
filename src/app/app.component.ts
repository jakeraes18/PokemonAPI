import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet]
})
export class AppComponent {}