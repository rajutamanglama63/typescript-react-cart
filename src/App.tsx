import Navbar from "./components/nav/Navbar";
import { CartContextProvider } from "./context/CartContext";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ItemListProvider } from "./context/ItemList";
import Home from "./screens/home/Home";


function App() {
  return (
    <GlobalContextProvider>
      <CartContextProvider>
        <ItemListProvider>
          <Navbar />
          <Home />
        </ItemListProvider>      
      </CartContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
