import React, { createContext, Component } from "react"
import data from "./data.json"

export const AppContext = createContext()

class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      cartArr: [],
      orderArr:[]
    }
  }

  addToCart = (payload) => {
    let item = this.state.data.find((ele) => ele.id == payload)
    this.setState({
      cartArr: [...this.state.cartArr, item],
    })
  }

  confirmOrder=(payload)=>{
    this.setState({
        orderArr: [...this.state.orderArr, payload],
      })
  }

  getCart = () => {
    return this.state.cartArr
  }

  getOrder = () => {
    return this.state.orderArr
  }

  getData = () => {
    return this.state.data
  }
  render() {
    let methods = {
      getData: this.getData,
      getCart: this.getCart,
      addToCart: this.addToCart,
      confirmOrder:this.confirmOrder,
      getOrder:this.getOrder
    }
    return (
      <AppContext.Provider value={methods}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider
