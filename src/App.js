import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from "./components/CheckOut/CheckOut";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Orders from "./components/Orders/Orders";
import AddProducts from "./components/Dashboard/AddProducts/AddProducts";
import ManageProduct from "./components/Dashboard/ManageProduct/ManageProduct";
import EditProduct from "./components/Dashboard/EditProduct/EditProduct";
import UpdateProduct from "./components/Dashboard/UpdateProduct/UpdateProduct";

export const UserContext = createContext();
const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="/productView/:productKey">
              <ProductDetails />
            </Route>
            <PrivateRoute path="/product/:productKey">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProduct />
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProducts />
            </PrivateRoute>
            <Route path="/updateProduct/:productKey">
              <UpdateProduct />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router >
      </UserContext.Provider>
    </>
  );
};

export default App;




