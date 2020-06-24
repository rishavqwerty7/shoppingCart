import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./redirect/Home";
import Cart from "./redirect/Cart";
import Order from "./redirect/Order";
import Product from "./redirect/Product";
import Login from "./redirect/Login";


function App(){
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact render={()=><Home />} />
        <Route path="/cart" exact render={()=><Cart />} />
        <Route path="/order" exact render={()=><Order />} />
        <Route path="/product" exact render={()=><Product />} />
        <Route path="/login" exact render={()=><Login />} />
      </Switch>
    </div>
  )
}

export default App;
