import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import AllProducts from "./AllProducts"
import Product from "./Product"
import data from "./data.json"
import Login from "../redirect/Login"
let productArr = [
  {
    name: "shirt",
    id: 201,
    price: 700,
  },
  {
    name: "shorts",
    id: 202,
    price: 500,
  },
  {
    name: "trouser",
    id: 203,
    price: 900,
  },
  {
    name: "jeans",
    id: 204,
    price: 750,
  },
]

const Cart = ({ data }) => {
  return <div>{data && data.map((item) => <div>{item.name}</div>)}</div>
}

class PublicRoute extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuth: false,
      cartArr: [],
    }
  }

  handleAuth = () => {
    this.setState({
      isAuth: true,
    })
  }

  handleLogoout = () => {
    this.setState({
      isAuth: false,
    })
  }

  addToCart = (item) => {
    this.setState({
      cartArr: [...this.state.cartArr, item],
    })
  }

  render() {
    console.log(this.state)
    const { isAuth } = this.state
    return (
      <>
        <h1>Masai Blog</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} isAuth={isAuth} handleClick={this.handleAuth} />
            )}
          />
          <Route
            path="/Products"
            render={(props) => (
              <AllProducts
                {...props}
                addToCart={this.addToCart}
                isAuth={isAuth}
                data={data}
              />
            )}
          />
          <Route
            path="/cart"
            render={(props) => <Cart data={this.state.cartArr} />}
          />
          <Route render={() => <div>Error page not found</div>} />
        </Switch>
      </>
    )
  }
}
export default PublicRoute
