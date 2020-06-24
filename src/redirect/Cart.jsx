import React, { Component } from "react"
import { AppContext } from "../AppProvider"
import SingleCart from "../components/SingleCart"

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phone: "",
    }
  }
  render() {
    const { getCart } = this.context
    let data = getCart()
    return (
      <div style={{ padding: "1rem  10rem" }}>
        <div>
          <div>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={}
            />
          </div>
          <div>
            phone:
            <input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={}
            />
          </div>
          <div>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={}
            />
          </div>
          <button></button>
        </div>
        {data &&
          data.map((ele, index) => {
            return <SingleCart key={index} data={ele} />
          })}
      </div>
    )
  }
}

Cart.contextType = AppContext
export default Cart
