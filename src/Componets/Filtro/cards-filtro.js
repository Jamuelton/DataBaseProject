import React from "react";


export default function CardFiltro(props){

    const [open, setOpen] = React.useState(false);
   
    return (
        <>
            <div className="card_container" onClick={() => setOpen(true)}>
               
                <p className="card_p1">{props.cod}</p>
                <p className="card_p1">{props.deposito}</p>
                <p className="card_p1">{props.cor}</p>
                <p className="card_p1">{props.tamanho}</p>
                <p className="card_p1">{props.quantidade}</p>
                <p className="card_p1">{props.tipo}</p>
                <p className="card_p1">{props.marca}</p>
                
                
            </div>
        </>
        
    ) 
}