import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    handleChange=(e)=>
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }

    handleClick=()=>
    {
        let uname="admin"
        let pwd="admin"
        const {username,password}=this.state
        if(uname===username && pwd===password)
        {
            this.props.handleClick();
        }
    }
    render()
    {
        const {username,password}=this.state
        const {isAuth}=this.props

        if(isAuth)
        {
            return <Redirect to="/products"/> 
        }
        return(
            <div>Login
                <input placeholder="username" name="username" value={username} onChange={this.handleChange}/>
                <input placeholder="password" name="password" value={password} onChange={this.handleChange}/>
                <button onClick={this.handleClick} >Submit</button>

            </div>
        )
    }
    
}
export default Login