import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { CartView } from "./components/Cart/CartView";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { DashBoard } from "./components/adminComponents/DashBoard/DashBoard";
import { LogIn } from "./components/adminComponents/LogIn/LogIn";
import { DeleteProduct } from "./components/adminComponents/DeleteProduct/DeleteProduct";
import './App.css';

function App() {

  return (
    <>
      <Routes>
        {/* ----------------------RUTAS PUBLICAS -------------------------*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          {/* Ruta opcional para filtrar categorias */}
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>

        {/* IMPORTAR EL COMPONENTE LOGIN */}
        <Route path="/admin/login" element={<LogIn />} />
        {/* <Route path="/admin/login" element={<h2>LOGIN</h2>} /> */}
        {/* -----------------------------ADMIN--------------------------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Si el admin esta logueado, redirige a la ruta /admin/dashboard */}
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<DashBoard />} />

          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/update" element={<ItemListContainer basePath="/admin/products/update" />} />
          <Route path="products/update/:id" element={<ProductFormContainer updateMode />} />
          <Route path="products/delete" element={<ItemListContainer basePath="/admin/products/delete" />} />
          <Route path="products/delete/:id" element={<DeleteProduct />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
