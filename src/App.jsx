import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartView } from "./components/Cart/CartView";
import './App.css';

function App() {

  return (
    <>
      <Header />

      <main>
        <h1>La tienda de comida</h1>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
