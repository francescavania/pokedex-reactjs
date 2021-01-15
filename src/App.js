import {
  BrowserRouter
} from "react-router-dom";
import Home from "./pages/home/Home";
import { NavbarComponent,FooterComponent } from './shared/components'

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Home/>
      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
