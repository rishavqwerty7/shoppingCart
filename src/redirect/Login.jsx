import React from "react"
import { Redirect } from "react-router-dom"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    let uname = "admin"
    let pwd = "admin"
    const { username, password } = this.state
  }
  render() {
    const { username, password } = this.state
    const { isAuth } = this.props

    if (isAuth) {
      return <Redirect to="/products" />
    }
    return (
      <div>
        <h2>Login</h2>

        <div>
          <input
            placeholder="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
export default Login
