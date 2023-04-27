import Navbar from "./components/nav/Navbar";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./screens/home/Home";


function App() {
  return (
    <GlobalContextProvider>
      <Navbar />
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
