import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";


export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        cod: props.cod,
        deposito: props.deposito,
        cor: props.cor,
        tamanho: props.tamanho,
        quantidade: props.quantidade,
        tipo: props.tipo,
        marca: props.marca,
        cod_camisa: props.cod_camisa,
    });
   let objeto = {}

    const handleChangeValues = (value) => {
      setEditValues((prevValues) => ({
        ...prevValues,
        [value.target.id]: value.target.value,
      }));
    };
  
    const handleClose = () => {
      props.setOpen(false);
    };

    
  
    const handleEditGame = () => {
        
      let obj = {...editValues};
   
      Axios.put("http://localhost:3001/edit", obj).then(r => {console.log("voltou", r);});
      handleClose();
    };
  
    const handleDeleteGame = () => {
        let obj2 = {...editValues};
        Axios.delete(`http://localhost:3001/delete/${editValues.cod}`)
        console.log(editValues.cod)
        handleClose();
    };
  
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Editar</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="cod"
              label="Codigo da Roupa"
              defaultValue={props.cod}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="deposito"
              label="Deposito"
              defaultValue={props.deposito}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="cor"
              label="Cor"
              defaultValue={props.cor}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="tamanho"
              label="tamanho"
              defaultValue={props.tamanho}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantidade"
              label="quantidade"
              defaultValue={props.quantidade}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="tipo"
              label="tipo"
              defaultValue={props.tipo}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="marca"
              label="marca"
              defaultValue={props.marca}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="cod_camisa"
              label="codigo camisa"
              defaultValue={props.cod_camisa}
              type="text"
              onChange={handleChangeValues}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
           
            <Button color="primary" onClick={() => handleEditGame()}>
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }