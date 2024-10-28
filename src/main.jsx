import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MemuProvider } from "./context/MenuContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MemuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MemuProvider>
  </BrowserRouter>
);
