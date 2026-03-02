# 📝 Mi Lista de Tareas App

Una aplicación web simple y elegante para gestionar tareas diarias, construida con React, TypeScript y Vite.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Características

- ✅ **Agregar tareas** - Crea nuevas tareas con validación de entrada
- ✏️ **Marcar como completadas** - Marca tareas completadas con un checkbox (se tachan automáticamente)
- 🗑️ **Eliminar tareas** - Elimina tareas que ya no necesitas
- 💾 **Estado local** - Gestión de estado con React Hooks (useState)
- 🎨 **Interfaz moderna** - Diseño limpio y responsive con CSS
- ⚡ **Rápida y ligera** - Construida con Vite para desarrollo ultrarrápido
- 🔒 **Type-safe** - TypeScript para mayor seguridad y mejor experiencia de desarrollo

## 🚀 Demo

La aplicación permite:
1. Escribir una tarea en el campo de entrada
2. Hacer clic en "Agregar" para añadirla a la lista
3. Marcar/desmarcar tareas como completadas usando el checkbox
4. Eliminar tareas individuales con el botón "Eliminar"

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)

## 🛠️ Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

### 1. Clonar el repositorio

```bash
git clone https://github.com/daniel78coder/Mi-lista-de-tareas-App.git
cd Mi-lista-de-tareas-App
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- `react` y `react-dom` - Biblioteca principal de React
- `typescript` - Soporte para TypeScript
- `vite` - Herramienta de build y desarrollo
- `@vitejs/plugin-react` - Plugin de Vite para React

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:5173/`

## 📦 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia el servidor de desarrollo en modo watch.
- Abre [http://localhost:5173](http://localhost:5173) en tu navegador
- La página se recargará automáticamente cuando hagas cambios
- Verás errores de lint y TypeScript en la consola

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.
- Optimiza el código para mejor rendimiento
- Minifica archivos JavaScript y CSS
- Genera archivos listos para desplegar

### `npm run preview`

Previsualiza la build de producción localmente.
- Útil para probar la versión de producción antes de desplegar
- Ejecuta después de `npm run build`

## 🏗️ Estructura del Proyecto

```
Mi-lista-de-tareas-App/
├── src/
│   ├── components/          # Componentes React
│   │   ├── TodoApp.tsx      # Componente principal con lógica de estado
│   │   ├── TodoList.tsx     # Lista de tareas
│   │   ├── TodoItem.tsx     # Item individual de tarea
│   │   └── AddTodoForm.tsx  # Formulario para agregar tareas
│   ├── types/
│   │   └── index.ts         # Definiciones de tipos TypeScript
│   ├── App.tsx              # Componente raíz
│   ├── App.css              # Estilos de la aplicación
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── .kiro/
│   └── skills/              # Skills de desarrollo
│       └── react-best-practices.md
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
└── README.md                # Este archivo
```

## 🧩 Componentes Principales

### `TodoApp`
Componente principal que maneja el estado de la aplicación:
- Gestiona el array de tareas con `useState`
- Implementa funciones para agregar, completar y eliminar tareas
- Utiliza `crypto.randomUUID()` para generar IDs únicos

### `AddTodoForm`
Formulario controlado para agregar nuevas tareas:
- Validación de entrada (no permite tareas vacías)
- Limpia el campo después de agregar
- Previene el comportamiento default del formulario

### `TodoList`
Renderiza la lista completa de tareas:
- Mapea el array de tareas a componentes `TodoItem`
- Pasa callbacks para toggle y delete
- Maneja listas vacías sin errores

### `TodoItem`
Componente individual de tarea:
- Checkbox para marcar como completada
- Estilo condicional (tachado cuando está completada)
- Botón para eliminar
- Atributos ARIA para accesibilidad

## 🎨 Tecnologías Utilizadas

- **React 18.2** - Biblioteca de UI con hooks
- **TypeScript 5.2** - Superset tipado de JavaScript
- **Vite 5.0** - Build tool y dev server ultrarrápido
- **CSS3** - Estilos modernos con gradientes y flexbox

## 🔧 Configuración

### TypeScript
El proyecto usa configuración estricta de TypeScript para mayor seguridad:
- `strict: true` - Habilita todas las verificaciones estrictas
- `noUnusedLocals: true` - Detecta variables no utilizadas
- `noUnusedParameters: true` - Detecta parámetros no utilizados

### Vite
Configurado con el plugin oficial de React:
- Hot Module Replacement (HMR) para desarrollo rápido
- Optimización automática de imports
- Build optimizado para producción

## 📚 Mejores Prácticas Implementadas

Este proyecto sigue las mejores prácticas de React:

✅ Componentes funcionales con hooks
✅ TypeScript para type safety
✅ Props interfaces bien definidas
✅ Estado inmutable (spread operators)
✅ Validación de entrada
✅ Nombres descriptivos y consistentes
✅ Componentes pequeños y enfocados
✅ Accesibilidad (ARIA labels)
✅ Código limpio y mantenible

Ver más en: [.kiro/skills/react-best-practices.md](.kiro/skills/react-best-practices.md)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Despliega:
```bash
vercel
```

### Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `dist` a [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega a `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Despliega:
```bash
npm run deploy
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👤 Autor

**Daniel**

- GitHub: [@daniel78coder](https://github.com/daniel78coder)
- Proyecto: [Mi-lista-de-tareas-App](https://github.com/daniel78coder/Mi-lista-de-tareas-App)

## 🙏 Agradecimientos

- [React](https://react.dev/) - Por la increíble biblioteca de UI
- [Vite](https://vitejs.dev/) - Por la herramienta de build ultrarrápida
- [TypeScript](https://www.typescriptlang.org/) - Por hacer JavaScript más seguro

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
