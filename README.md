# Perfil3_AdrianaMartinez

Aplicación móvil desarrollada con **React Native + Expo** para la evaluación de Perfil 3 del Módulo 5: *Desarrollo de componentes para dispositivos móviles*.

## Datos de la estudiante

| | |
|---|---|
| **Nombre** | Adriana Paola Martínez Vásquez |
| **Carnet** | 20210130 |
| **Sección y grupo** | 3°B - G1 |

## Entregables

- **Video demostrativo:** [Ver video](https://drive.google.com/file/d/1Fm5qAnr-8yi02w9lzI080I3_GC7u1eQg/view?usp=sharing)
- 📦 **Descargar APK:** [Descargar APK](https://expo.dev/accounts/admartinez11/projects/Perfil3_AdrianaMartinez/builds/637ed143-9281-402c-b303-6e7a96d4dac9)

## Descripción

La app cuenta con dos pantallas conectadas con React Navigation:

1. **Perfil:** muestra el nombre, carnet, sección y grupo de la estudiante, con un botón para ir a la lista de productos.
2. **Productos:** consume la API [Fake Store](https://fakestoreapi.com/products) y muestra cada producto en una tarjeta con su imagen, nombre, descripción, categoría y precio. Permite regresar a la pantalla anterior y actualizar la lista deslizando hacia abajo.

También incluye un ícono y un splash screen personalizados (Master Ball).

## Tecnologías

- React Native + Expo (SDK 57)
- React Navigation (Native Stack)
- Fetch API con `async/await`
- Expo Splash Screen

## Estructura del proyecto

```
src/
├── components/      # Componentes reutilizables (Card, Loader, ErrorMessage, InfoRow, Button)
├── constants/       # Datos de la estudiante
├── hooks/           # Custom hooks (useProducts)
├── navigation/      # Configuración de React Navigation
├── screens/         # Pantallas (StudentScreen, ProductsScreen)
├── services/        # Consumo de la API (productService)
└── styles/          # Colores y medidas (theme)
```

- **Servicio (`productService`):** hace la petición a la API con `fetch`.
- **Custom hook (`useProducts`):** maneja los estados de carga, error y actualización.
- **Pantallas:** solo se encargan de mostrar la interfaz con los datos del hook.

## Cómo ejecutar el proyecto

```bash
npm install
npx expo start
```

Luego escanea el código QR con la app **Expo Go** en un dispositivo Android, o presiona `a` para abrirla en un emulador.
