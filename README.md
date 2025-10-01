# CIIS - Congreso Internacional de Informática y Sistemas

Sitio web oficial del Congreso Internacional de Informática y Sistemas (CIIS) desarrollado con Astro, React y Tailwind CSS.

## 📋 Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribución](#contribución)

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## ⚙️ Configuración del Proyecto

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/epaniaguam/Astro-CIIS.git
   cd Astro-CIIS
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   
   Crea un archivo `.env` en la raíz del proyecto (si no existe) y añade las siguientes variables:
   ```env
   PUBLIC_DOMAIN_BASE=https://ciistacna.com/
   ```
   
   > **Nota:** Las variables que comienzan con `PUBLIC_` están disponibles en el cliente. Para variables sensibles del servidor, usa variables sin el prefijo `PUBLIC_`.

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:4321`

## 🏗️ Estructura del Proyecto

```
/
├── public/                 # Archivos estáticos
│   ├── ciis-history/      # Imágenes históricas del congreso
│   ├── editions-image/    # Imágenes de ediciones
│   ├── icons/            # Iconos
│   ├── logos/            # Logotipos
│   ├── speakers/         # Fotos de ponentes
│   └── ...
├── src/
│   ├── assets/           # Assets del proyecto
│   ├── components/       # Componentes reutilizables
│   ├── helpers/          # Funciones de ayuda
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Layouts de páginas
│   ├── middlewares/     # Middlewares
│   ├── models/          # Tipos y modelos de datos
│   ├── pages/           # Páginas del sitio (rutas)
│   ├── styles/          # Estilos globales
│   ├── utilities/       # Utilidades
│   └── views/           # Vistas organizadas por funcionalidad
│       ├── schedules/   # Cronogramas
│       ├── speakers/    # Ponentes
│       ├── sponsors/    # Patrocinadores
│       ├── topics/      # Temas/Tópicos
│       └── workshops/   # Talleres
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── tsconfig.json        # Configuración de TypeScript
```

## 🛠️ Scripts Disponibles

| Comando              | Descripción                                    |
| :------------------- | :--------------------------------------------- |
| `npm run dev`        | Inicia el servidor de desarrollo              |
| `npm run start`      | Alias para `npm run dev`                      |
| `npm run build`      | Construye el sitio para producción           |
| `npm run preview`    | Previsualiza la build de producción          |
| `npm run astro`      | Ejecuta comandos CLI de Astro                |

### Comandos de desarrollo útiles:

```bash
# Verificar el código
npm run astro check

# Añadir integraciones
npm run astro add tailwind
npm run astro add react

# Obtener ayuda
npm run astro -- --help
```

## 📝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

**Desarrollado con ❤️ para el Congreso Internacional de Informática y Sistemas - Tacna**
