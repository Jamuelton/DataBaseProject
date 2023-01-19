import React, {useState , useEffect} from 'react';
import {Link} from 'react-dom'
import './App.css';
import Axios from 'axios';
import Card from './Componets/Cards/card';
import logo from '../src/Componets/imgs/ZcubeLogo.png'
import CardCompra from './Componets/Cards-compra/cards-compra.js';
import Compra from './Componets/compra/compra.js';
import CardFiltro from './Componets/Filtro/cards-filtro';



function App() {

  const [values, setValues] = useState();
  const [listRoupa, setListRoupa] = useState();
  const [listCompra, setListCompra] = useState();
  const [listFiltro, setListFiltro] = useState();

  


  const handleChangeValues = (value) =>{
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickBut = () => {
    Axios.post("http://localhost:3001/register",{

      cod: values.cod,
      deposito: values.deposito,
      cor: values.cor,
      tamanho: values.tamanho,
      quantidade: values.quantidade,
      tipo: values.tipo,
      marca: values.marca,
      cod_camisa: values.cod_camisa,
      cod_calca: values.cod_calca,
      cod_casaco: values.cod_casaco,
      cod_acessorio: values.cod_acessorio,
    }).then((response) => {
      setListRoupa([
        ...listRoupa, 
        {
          cod: values.cod,
          deposito: values.deposito,
          cor: values.cor,
          tamanho: values.tamanho,
          quantidade: values.quantidade,
          tipo: values.tipo,
          marca: values.marca,
          cod_camisa: values.cod_camisa,
          cod_calca: values.cod_calca,
          cod_casaco: values.cod_casaco,
          cod_acessorio: values.cod_acessorio,
        }
      ])
    });
  };

  const handleClickButCompra = () => {
    Axios.post("http://localhost:3001/register-compra",{

      cod_compra: values.cod_compra,
      lugar: values.lugar,
      cod_roupa: values.cod_roupa,
     
    }).then((response) => {
      setListCompra([
        ...listCompra, 
        {
          cod_compra: values.cod_compra,
          local: values.local,
          cod_roupa: values.cod_roupa,
        }
      ])
    });
  };

 
  

 
  
  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListRoupa(response.data);
    });
  },[listRoupa]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getCardsCompra").then((response) => {
      setListCompra(response.data);
    });
  },[listCompra]);
 
  

  return (
    <div className='App_container'>
      <div className="app_container">
      <div className='bar_container'>
            <img src={logo} className='bar_img_logo'></img>
            <ul className='bar_ul'>
                <li className='bar_li'><a>ESTOQUE</a></li>
                <li className='bar_li'><a>COMPRAS</a></li>
                <li className='bar_li'><a>ADICIONAR</a></li>
            </ul>
      </div>

      <div className='app_compra_container'>
        <h2 className='compra_h2'>Compras</h2>
        <input  
                className='register_input'
                type="text"
                name="cod_compra"
                placeholder = "Código da compra"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="lugar"
                placeholder = "local"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="cod_roupa"
                placeholder = "codigo roupa"
                onChange={handleChangeValues}
        />

        <button className='register_but_compra' onClick={() => handleClickButCompra()}>Comprar</button>

      </div>

      <h1 className = 'register_title'>Histórico de compras</h1>

      {typeof listCompra !== "undefined" &&
        listCompra.map((value) => {
          return (
            
            <CardCompra 
              key={value.Id}
              listCardCompra = {listCompra}
              setListCardCompra = {setListCompra}
              cod_compra = {value.Cod_compra}
              lugar = {value.Lugar}
              cod_roupa = {value.Cod_roupa}
              
             
            ></CardCompra>
          );
          
      })}

      

      <h1 className = 'register_title'>Repositório ZcubeStore</h1>

      <Compra></Compra>

      

      {typeof listFiltro !== "undefined" &&
        listFiltro.map((value) => {
          return (
            
           
            
            <CardFiltro 
              key={value.Cod_roupa}
              listCard = {listFiltro}
              setListCard = {setListFiltro}
              cod = {value.Cod_roupa}
              deposito = {value.Deposito}
              cor = {value.Cor}
              tamanho = {value.Tamanho}
              quantidade = {value.Quantidade}
              tipo = {value.Tipo}
              marca = {value.Marca}
             
            ></CardFiltro>
          );
      })}


      <h1 className = 'register_title'>Estoque</h1>
     

      {typeof listRoupa !== "undefined" &&
        listRoupa.map((value) => {
          return (
            
           
            
            <Card 
              key={value.Cod_roupa}
              listCard = {listRoupa}
              setListCard = {setListRoupa}
              cod = {value.Cod_roupa}
              deposito = {value.Deposito}
              cor = {value.Cor}
              tamanho = {value.Tamanho}
              quantidade = {value.Quantidade}
              tipo = {value.Tipo}
              marca = {value.Marca}
             
            ></Card>
          );
          
      })}
      <div className='register_container'>
        
        <h2 className = 'register_title'>Adicionar Roupas</h2>
        <input  
                className='register_input'
                type="text"
                name="cod"
                placeholder = "Código da roupa"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="deposito"
                placeholder = "Deposito"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="cor"
                placeholder = "Cor"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="tamanho"
                placeholder = "Tamanho"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="quantidade"
                placeholder = "Quantidade"
                onChange={handleChangeValues}
                
        />

        <input  
                className='register_input'
                type="text"
                name="tipo"
                placeholder = "Tipo"
                onChange={handleChangeValues}
        />

        <input  
                className='register_input'
                type="text"
                name="marca"
                placeholder = "Marca"
                onChange={handleChangeValues}
        />

        

        

        <button className='register_but' onClick={() => handleClickBut()}>Cadastrar</button>
      </div>
      
     
        </div>
    </div>
    
  );
}

export default App;
