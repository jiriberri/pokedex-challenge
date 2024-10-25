# pokedex-challenge

Este template ayuda a comprender el objetivo del proyecto, asi como las tecnologias usadas y cómo inicializarlo.

## Forma de Pensar y Elecciones Tomadas

Este proyecto de Pokédex fue desarrollado con el objetivo de proporcionar una experiencia de usuario fluida y atractiva, utilizando tecnologías modernas y prácticas de desarrollo recomendadas. A continuación, se detallan algunas de las decisiones clave y la forma de pensar detrás de ellas:

### 1. Arquitectura de Componentes:
- Componentización: Se optó por una arquitectura basada en componentes para facilitar la reutilización y el mantenimiento del código. Cada componente tiene una responsabilidad clara y bien definida.

- Componentes Principales: Los componentes principales incluyen `PokeList`, `PokeListFav`, `PokeDescription`, `MainPage`, y `NavigationButtons`.


### 2. Gestión del Estado:
- Vuex: Se utilizó Vuex para la gestión del estado global de la aplicación. Esto permite un manejo centralizado del estado, facilitando la sincronización de datos entre componentes y mejorando la escalabilidad del proyecto.


### 3. Enrutamiento:
- Vue Router: Se implementó Vue Router para gestionar la navegación entre diferentes vistas de la aplicación. Esto permite una navegación fluida y una estructura de URL amigable.


### 4. Estilos y Responsividad:
- CSS y Media Queries: Se utilizaron archivos CSS modulares para mantener los estilos organizados. Se añadieron media queries para asegurar que la aplicación sea responsiva y se vea bien en diferentes tamaños de pantalla.
- Flexbox: Se utilizó Flexbox para alinear y distribuir los elementos de manera eficiente, asegurando una disposición consistente y adaptable.


### 5. Interactividad y Experiencia de Usuario:
- FontAwesome: Se integró FontAwesome para proporcionar iconos atractivos y funcionales, mejorando la experiencia visual de la aplicación.
- Clipboard API: Se utilizó la Clipboard API para permitir a los usuarios copiar detalles de los Pokémon al portapapeles, facilitando el compartir información.


### 6. Configuración y Herramientas de Desarrollo:
- Vite: Se eligió Vite como el bundler y servidor de desarrollo debido a su rapidez y eficiencia en la construcción de proyectos Vue.
ESLint y Prettier: Se configuraron ESLint y Prettier para mantener un código limpio y consistente, siguiendo las mejores prácticas de desarrollo.



## Tecnologías Utilizadas
- **Vue 3**: Framework principal para la construcción de la interfaz de usuario.
- **Vuex**: Gestión del estado global de la aplicación.
- **Vue Router**: Gestión de la navegación y enrutamiento.
- **Vite**: Bundler y servidor de desarrollo rápido y eficiente.
-**FontAwesome**: Biblioteca de iconos para mejorar la interfaz de usuario.
-**Clipboard API**: Para copiar texto al portapapeles.
-**ESLint**: Herramienta de linting para mantener la calidad del código.
-**Prettier**: Formateador de código para asegurar consistencia en el estilo.



### Cómo ejecutar el profecto
Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Instalar dependencias**
``` sh
npm install
```

2. **Compilar y Recargar en Caliente para Desarrollo:**
``` sh
npm run dev
```

3. **Compilar y Minificar para Producción:**
``` sh
npm run buil
```

4. **Lint con ESLint:**
``` sh
npm run lint
```
