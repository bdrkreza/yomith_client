
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar';
import Admin from "./components/Dashboard/Admin/Admin";
import Orders from "./components/Orders/Orders";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Login/Login";
import AddProducts from "./components/Dashboard/AddProducts/AddProducts";
import ManageProduct from "./components/Dashboard/ManageProduct/ManageProduct";
import EditProduct from "./components/Dashboard/EditProduct/EditProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/addProduct">
            <AddProducts />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/editProduct">
            <EditProduct />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productView/:productKey">
            <ProductDetails />
          </Route>
          <PrivateRoute path="/product/:productKey">
            <CheckOut />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
