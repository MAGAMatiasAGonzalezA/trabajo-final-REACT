# 🛍️ Mi Tienda React

Proyecto de práctica desarrollado como parte del aprendizaje de **React**, implementando una tienda online con listado de productos, navegación y carrito de compras.

---

## 📋 Descripción

**Mi Tienda React** es una Single Page Application (SPA) que simula una tienda virtual. El usuario puede explorar un catálogo de productos obtenido desde JSON, navegar entre secciones y acceder al carrito de compras.

---

## 🚀 Tecnologías utilizadas

| Tecnología       | Uso                                              |
|------------------|--------------------------------------------------|
| **React**        | Librería principal para construcción de la UI    |
| **React Router** | Navegación entre rutas (`/` y `/carrito`)        |
| **Context API**  | Manejo del estado global del carrito             |
| **Fetch / REST** | Consumo de datos de productos desde JSON         |

---

## 🗂️ Estructura del proyecto

```
src/
├── components/
│   ├── Count/
│   │   ├── Count.jsx
│   │   └── Count.css
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Nav/
│   │   ├── Nav.jsx
│   │   └── Nav.css
│   ├── ItemListContainer/
│   │   ├── ItemListContainer.jsx
│   │   └── ItemListContainer.css
│   ├── ItemList/
│   │   ├── ItemList.jsx
│   │   └── ItemList.css
│   ├── ItemDetailContainer/
│   │   ├── ItemDetailContainer.jsx
│   ├── ItemDetail/
│   │   ├── ItemDetail.jsx
│   └── Item/
│       ├── Item.jsx
│       └── Item.css
├── App.css
├── App.jsx
└── index.css
└── main.jsx
```

---

## ⚙️ Funcionalidades implementadas

- ✅ Listado de productos consumidos desde un archivo JSON
- ✅ Tarjetas de producto uniformes con imagen, nombre, descripción y precio
- ✅ Navegación con React Router entre Home, Detalles y Carrito
- ✅ Header responsivo con logo y barra de navegación

---

## 🔧 Instalación y uso

### Requisitos previos
- Node.js instalado

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/trabajo-final-REACT.git

# 2. Ingresar al directorio
cd trabajo-final-REACT

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos.
