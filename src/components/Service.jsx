import React from 'react'
import Sdata from '../Data/Sdata'
import Card from './Card'
import { Zoom} from "react-reveal";

function Service() {
    return (
        <>
           <div className="my-3">
               <h1 className="text-center">Our Services</h1>
               </div> 
                <Zoom>    
                       <div></div>
               <div className="container-fluid mb-5" >
             <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row gy-4">
                    {Sdata.map((val,index)=>{
                        return(
                                <Card key={index} imgsrc={val.imgsrc}
                                 title={val.title}   />
                        )
                    })}

                   </div>

               </div>
             </div>
           </div>

           </Zoom>



        </>
    )
}

export default Service
