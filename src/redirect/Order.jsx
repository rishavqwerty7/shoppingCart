import React, {useContext} from 'react';
import {AppContext} from '../AppProvider';
import SingleCart from "../components/SingleCart";

const Order =()=>{
    let item=useContext(AppContext)
    let data=item.getOrder()
    return(
        <div style={{ padding: "1rem  10rem" }}>
            {
                data && data.map((ele,index)=>{
                    return(
                        <div key={index}>
                            <div>
                                <div>
                                    Name:{ele.name}
                                </div>
                                <div>
                                    phone:{ele.phone}
                                </div>
                                <div>
                                    Email:{ele.email}
                                </div>
                            </div>
                            {
                                ele.data && ele.data.map((ele, index) => {
                                    return <SingleCart key={index} data={ele} />
                                })
                            }
                        </div>
                    )
                })
            }
      </div>
    )
}

export default Order