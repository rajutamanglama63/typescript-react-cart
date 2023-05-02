import Navbar from "./components/nav/Navbar";
import { CartContextProvider } from "./context/CartContext";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./screens/home/Home";


function App() {
  return (
    <GlobalContextProvider>
      <CartContextProvider>
        <Navbar />
        <Home />
      </CartContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
