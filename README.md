## Características

- **Inicio de sesión**: Los usuarios pueden autenticarse utilizando un formulario de login con validación.
- **Lista de productos**: Muestra un listado de productos obtenidos desde la API.
- **Detalle del producto**: Visualiza información detallada de un producto seleccionado.
- **Gestión del estado global**: Implementado con **Redux Toolkit** y `createAsyncThunk` para manejar la obtención de datos.
- **Drawer Navigation**: Menú lateral para navegar entre secciones y stack navigation.
- **Pull to Refresh**: Recarga la lista de productos al deslizar hacia abajo.

---

## Instalación y configuración

### Requisitos previos

- Node.js y npm/yarn instalados.
- React Native configurado en tu entorno (Expo o CLI).
- Una cuenta en [Fake Store API](https://fakestoreapi.com) (opcional, pero recomendable para pruebas personalizadas).

### Pasos de instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Janonimus007/product-app.git
   cd product-app
2. Instala las dependencias:

   ```bash
    npm install
    # o si prefieres yarn
    yarn install
3. Configura tu emulador y corre el proyexto:

   ```bash
    npx expo start
### Librerías utilizadas

- **React Native**: Framework base.
- **Redux Toolkit**: Manejo del estado global.
- **axios**: Cliente HTTP para interactuar con APIs.
- **React Navigation:**: Navegación en la app.
- **Native Base**: Diseño y componentes estilizados.

