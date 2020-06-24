import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import Product from "./Product"

const AllProducts = (props) => {
  const { data, match, isAuth, addToCart, history } = props
  if (!isAuth) {
    return <Redirect to="/login" />
  }
  let query = new URLSearchParams(history.location.search)
  let items = Number(query.get("items"))

  if (!items) {
    items = data.length
  }
  return (
    <div>
      <h2>AllProducts</h2>

      {data &&
        data
          .filter((a, i) => i < items)
          .map((item, index) => (
            <div style={{ margin: "50px" }} key={item.id}>
              {index + 1}.
              <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
            </div>
          ))}
      <Route
        path="/Products/:id"
        render={(props) => (
          <Product {...props} addToCart={addToCart} data={data} />
        )}
      />
    </div>
  )
}

export default AllProducts
