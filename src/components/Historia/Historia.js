import React, { Component } from "react";
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";
import Data from "../../json/data.json";

//console.log(Data);

export default class Historia extends Component {


  constructor(props) {
    super(props);
    this.state = {
      identificador: 1,
      id: "1",
      arrayOpciones: [],
    };
  }

  componentDidUpdate = (prevState) => {
    const { identificador, id, arrayOpciones } = this.state;
    
    if (prevState.identificador !== identificador && identificador <= 5) {
        arrayOpciones.push(id.substring(1).toUpperCase());
    }
  };



  handleOpcionA = () => {
    const { identificador } = this.state;

    if (identificador < 5) {
      this.setState(
        {
        identificador: identificador + 1,
        id: identificador + 1 + "a",     
      }
      );
    }
  };


  handleOpcionB = () => {
    const { identificador } = this.state;
    if (identificador < 5) {
      this.setState(
        {
        identificador: identificador + 1,
        id: identificador + 1 + "b",
        
      }
      );
    }
  };

  render() {

    const {id, arrayOpciones} = this.state;
    const filtrarData = Data.find( (objeto) => objeto.id.includes(id))
    console.log({filtrarData});

    let handlers = {
      funcionA: this.handleOpcionA,
      funcionB: this.handleOpcionB,
    };

    return (
      <div className="layout">
        <h1 className="historia">{filtrarData.historia}</h1>

        <Opciones 
        handlers = {handlers}
        opciones ={filtrarData.opciones}
        identificador={this.state.identificador}
        />

        <Recordatorio 
        opcionesAnteriores = {id.substring(1).toUpperCase()}
        arrayOpciones = {arrayOpciones}
        />
      </div>
    );
  }
}

