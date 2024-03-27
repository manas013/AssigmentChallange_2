import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Productlist from './components/productlist';
import ProductDetails from './components/productDetails';
import CreateProduct from './components/createProduct';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(<Productlist/>),
    },
    {
      path: "/ProductDetails/:id",
      element:(<ProductDetails/>),
    },
    {
      path: "/CreateProduct",
      element:(<CreateProduct/>),
    },
  ]);
  
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
