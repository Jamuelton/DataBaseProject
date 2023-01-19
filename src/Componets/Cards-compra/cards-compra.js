import React from "react";
import "./cardCompra.css"

export default function CardCompra(props){

    const [open, setOpen] = React.useState(false);
   
    return (
        <>
            <div className="card_container" onClick={() => setOpen(true)}>
               
                <p className="card_p1">{props.cod_compra}</p>
                <p className="card_p1">{props.lugar}</p>
                <p className="card_p1">{props.cod_roupa}</p>
                
            </div>
        </>
        
    ) 
}
