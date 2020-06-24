import React, { Component } from "react"
import { AppContext } from "../AppProvider"
import SingleCart from "../components/SingleCart"

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phone: "",
      email:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    const { getCart, confirmOrder } = this.context
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
              value={this.state.name}
            />
          </div>
          <div>
            phone:
            <input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          <div>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <button onClick={()=>confirmOrder({name:this.state.name,phone:this.state.phone, email:this.state.email, data:data})}>Place Order</button>
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
