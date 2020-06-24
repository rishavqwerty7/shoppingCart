import React, { Component } from 'react';
import {AppContext} from '../AppProvider';
import SingpleItem from "../components/SingpleItem";

class Home extends Component{
    render(){
        const {getData,addToCart}=this.context
        let data=getData()
        return(
            <div style={{padding:"1rem  10rem"}}>
                {
                    data && data.map((ele,index)=>{
                        return(
                            <SingpleItem key={index} data={ele} handleClick={addToCart} />
                        )
                    })
                }
            </div>
        )
    }
}

Home.contextType =AppContext;
export default Home;