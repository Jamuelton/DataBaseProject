import React, { useState } from "react";
import Axios from "axios";


export default function Compra(props) {

    const [editValuesCompra, setEditValuesCompra] = useState({
        cod_compra: props.cod_compra,
    });

    const handleChangeValuesCompra = (value) => {
        setEditValuesCompra((prevValues) => ({
          ...prevValues,
          [value.target.id.cod_compra]: value.target.value,
        }));
      };

    const comprar = () =>{
        let objC = {...editValuesCompra};
        Axios.put("http://localhost:3001/editCompra", objC).then(r => {console.log("voltou", r);});
    };


    return(
        <button className='register_but_compra_atualizar' onClick={() => comprar()}>Atualizar compras</button>
    )

}