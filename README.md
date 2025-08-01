# Pokémon Search App 🧩

Esta es una aplicación frontend desarrollada con **Angular** que permite buscar información de Pokémon en tiempo real desde la [PokeAPI](https://pokeapi.co/).

---

## 🚀 Instrucciones para ejecutar el frontend localmente

1. **Clona el repositorio**:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. **Instala las dependencias**:

```bash
npm install
```

3. **Inicia el servidor de desarrollo**:

```bash
ng serve
```

4. **Abre la aplicación en tu navegador**:

Visita `http://localhost:4200/`

---

## 📦 Dependencias necesarias

Asegúrate de tener instalado:

- **Node.js** (v18 o superior recomendado)  
- **npm** (v9 o superior)
- **Angular CLI** (v17+):

```bash
npm install -g @angular/cli
```

Dependencias del proyecto (ya incluidas en `package.json`):

- `@angular/core`
- `@angular/common`
- `@angular/router`
- `rxjs`
- `bootstrap` (para estilos visuales)

---

## ⏱️ Tiempo estimado de desarrollo

El desarrollo de la prueba tomó aproximadamente **3 horas**, distribuidas en:

- Configuración inicial y estructura.
- Implementación del buscador y consumo de la API.
- Manejo de errores y caché local.
- Estilos responsivos y pruebas finales.

---

## 🧠 Nota

La aplicación hace uso del almacenamiento `sessionStorage` para cachear resultados y evitar peticiones innecesarias.
