# SwapCamera 📸

Una aplicación móvil interactiva desarrollada con React Native y Expo que permite capturar fotos y gestionarlas mediante gestos intuitivos de deslizamiento (swipe).

## 🎬 Demostración

<!-- Espacio reservado para el GIF demostrativo -->
<!-- Reemplaza esta línea con tu GIF mostrando el flujo completo de la aplicación -->

![Demo de SwapCamera](./assets/demo.gif)

*Demostración del flujo completo: Captura de foto → Swipe → Galería*

---

## 📋 Descripción

**SwapCamera** es una aplicación móvil que combina la funcionalidad de cámara con una experiencia de usuario gestual moderna. Los usuarios pueden tomar fotografías y decidir instantáneamente si desean guardarlas o descartarlas mediante gestos de deslizamiento:

- **Deslizar hacia la derecha** ➜ Guardar la foto en la galería
- **Deslizar hacia la izquierda** ➜ Descartar la foto

## ✨ Características Principales

- 📸 **Captura de fotos** con la cámara del dispositivo
- 👆 **Gestos intuitivos** para guardar o descartar fotos
- 🖼️ **Galería integrada** para visualizar todas las fotos guardadas
- 🎨 **Interfaz moderna** con tema Dracula
- ⚡ **Animaciones fluidas** con React Native Reanimated
- 📱 **Compatibilidad** con iOS y Android

## 🛠️ Tecnologías Utilizadas

- **[Expo](https://expo.dev)** (~54.0.31) - Framework de desarrollo
- **[React Native](https://reactnative.dev)** (0.81.5) - Framework móvil
- **[Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)** (~17.0.10) - API de cámara
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** (~2.28.0) - Manejo de gestos
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** (~4.1.1) - Animaciones de alto rendimiento
- **[Expo Router](https://docs.expo.dev/router/introduction/)** (~6.0.21) - Navegación basada en archivos
- **[TypeScript](https://www.typescriptlang.org/)** (~5.9.2) - Tipado estático

## 📁 Estructura del Proyecto

```
swapCamera/
├── app/                      # Rutas de la aplicación (Expo Router)
│   ├── _layout.tsx          # Layout principal
│   ├── index.tsx            # Pantalla de inicio
│   ├── camera.tsx           # Pantalla de cámara
│   ├── gallery.tsx          # Pantalla de galería
│   └── photo-viewer.tsx     # Visor de fotos
├── components/              # Componentes React (Atomic Design)
│   ├── atoms/              # Componentes básicos (botones, etc.)
│   ├── molecules/          # Componentes compuestos (cards, grids)
│   └── organisms/          # Componentes complejos (vistas)
├── lib/                     # Lógica de negocio y utilidades
│   ├── modules/            # Módulos funcionales
│   │   └── camera/         # Lógica de la cámara
│   ├── ui/                 # Hooks personalizados de UI
│   └── store/              # Gestión de estado (Zustand)
├── assets/                  # Recursos estáticos (imágenes, iconos)
├── app.json                # Configuración de Expo
├── package.json            # Dependencias del proyecto
└── tsconfig.json           # Configuración de TypeScript
```

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Expo CLI**: `npm install -g expo-cli`
- Para iOS: **Xcode** (solo macOS)
- Para Android: **Android Studio**

## 📦 Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/siramong/swapCamera.git
   cd swapCamera
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

## 🎮 Ejecución de la Aplicación

### Iniciar el servidor de desarrollo:

```bash
npx expo start
```

### Opciones de ejecución:

Una vez iniciado el servidor, tendrás las siguientes opciones:

- **Presiona `i`** - Abrir en simulador de iOS (requiere macOS)
- **Presiona `a`** - Abrir en emulador de Android
- **Escanea el código QR** - Con la app **Expo Go** en tu dispositivo físico

### Comandos adicionales:

```bash
# Iniciar directamente en Android
npm run android

# Iniciar directamente en iOS
npm run ios

# Iniciar versión web
npm run web

# Ejecutar linter
npm run lint
```

## 📖 Guía de Uso

1. **Pantalla de Inicio**
   - Visualiza las opciones principales: Abrir Cámara y Ver Galería
   - Lee las instrucciones rápidas de uso

2. **Capturar Foto**
   - Toca el botón "Open Camera"
   - Permite los permisos de cámara cuando se soliciten
   - Presiona el botón de captura para tomar una foto

3. **Gestionar Foto**
   - **Desliza hacia la DERECHA** (→) para guardar la foto
   - **Desliza hacia la IZQUIERDA** (←) para descartarla
   - La foto guardada se añadirá automáticamente a la galería

4. **Ver Galería**
   - Toca "View Gallery" desde la pantalla de inicio
   - Navega por todas tus fotos guardadas
   - Toca una foto para verla en pantalla completa

## ⚙️ Configuración de Permisos

La aplicación requiere permisos de cámara. Estos están configurados en `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Permite acceso a tu cámara.",
          "microphonePermission": "Permite acceso a tu micrófono."
        }
      ]
    ]
  }
}
```

## 🎨 Arquitectura

El proyecto sigue los principios de **Atomic Design** y separa la lógica de negocio de la presentación:

- **Atoms**: Componentes UI básicos reutilizables
- **Molecules**: Combinaciones simples de atoms
- **Organisms**: Componentes complejos que combinan molecules y atoms
- **Lib**: Hooks personalizados y lógica de negocio
- **Store**: Gestión de estado global con Zustand

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/NuevaFuncion`)
3. Realiza commit de tus cambios (`git commit -m 'Añadir nueva función'`)
4. Haz push a la rama (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**siramong**

- GitHub: [@siramong](https://github.com/siramong)

## 📚 Recursos Adicionales

- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Gesture Handler Docs](https://docs.swmansion.com/react-native-gesture-handler/)
- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)

---

**¡Disfruta capturando y gestionando tus fotos con SwapCamera!** 📸✨
