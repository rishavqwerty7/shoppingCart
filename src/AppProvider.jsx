import React, { createContext ,Component} from "react";
import data from './data.json';

export const AppContext=createContext()

class AppProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            data:data,
            cartArr:[]
        }
    }

    addToCart=(payload)=>{
        let item=this.state.data.find(ele=>ele.id==payload)
        this.setState({
            cartArr:[...this.state.cartArr,item]
        })
    }

    getCart=()=>{
        return this.state.cartArr
    }

    getData=()=>{
        return this.state.data
    }
    render(){
        let methods={
            getData:this.getData,
            getCart:this.getCart,
            addToCart:this.addToCart
        }
        return(
            <AppContext.Provider value={methods}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;