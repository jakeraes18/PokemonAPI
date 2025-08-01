export interface Pokemon {
  id: number;
  nombre: string;
  especie: string;
  tipos: string[];
  habilidades: string[];
  ataques: string[];
  estadisticas: { nombre: string, valor: number }[];
  imagenBase64: string;
}