import React from "react";
import "./card.css"
import FormDialog from "../Dialog/dialog.js";


export default function Card(props){

    const [open, setOpen] = React.useState(false);
   
    return (
        <>

            
            <FormDialog 
                open ={open} 
                setOpen = {setOpen}
                cod = {props.cod}
                deposito = {props.deposito}
                cor = {props.cor}
                tamanho = {props.tamanho}
                quantidade = {props.quantidade}
                tipo = {props.tipo}
                marca = {props.marca}
                cod_camisa = {props.cod_camisa}
                listCard = {props.listCard}
                setListCard = {props.setListCard} 
            />
             
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
