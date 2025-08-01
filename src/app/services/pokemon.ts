import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemon(nombre: string): Observable<Pokemon> {
    return this.http.get<any>(`${this.apiUrl}${nombre}`).pipe(
      map(data => ({
        nombre: data.name,
        especie: data.species.name,
        tipos: data.types.map((t: any) => t.type.name),
        habilidades: data.abilities.map((a: any) => a.ability.name),
        ataques: data.moves.slice(0, 10).map((m: any) => m.move.name),
        estadisticas: data.stats.map((s: any) => ({
          nombre: s.stat.name,
          valor: s.base_stat
        })),
        imagenBase64: '',
        id: data.id
      })),
      catchError(err => {
        return throwError(() => new Error('No se pudo obtener el Pokémon'));
      })
    );
  }

  async convertirImagenABase64(url: string): Promise<string> {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error('Imagen no encontrada');
    }

    const blob = await respuesta.blob();
    return await this.blobABase64(blob);
  }

  private blobABase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const lector = new FileReader();
      lector.onloadend = () => resolve(lector.result as string);
      lector.onerror = reject;
      lector.readAsDataURL(blob);
    });
  }
}
