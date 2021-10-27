import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "../../Global";
import { Redirect } from "react-router";

export default class InsertarHospital extends Component {
  
    //para comprobar si el hospital se agega correctamente
    state = {
      
        status:false
    }
  
    idHosRef = React.createRef();
  nomRef = React.createRef();
  dirRef = React.createRef();
  telRef = React.createRef();
  camRef = React.createRef();

  insertaHospital = (e) =>{
    e.preventDefault();
    var id = this.idHosRef.current.value;
    var nom = this.nomRef.current.value;
    var dir = this.dirRef.current.value;
    var tel = this.telRef.current.value;
    var cam = this.camRef.current.value;

    var hos = {
        idhospital: id,
        nombre: nom,
        direccion: dir,
        telefono: tel,
        camas: cam
    }

    var request='/webresources/hospitales/post';
    var url = Global.urlhospitales+request;

    axios.post(url, hos).then(res =>{
        this.setState({
            status:true
        })
    });
  }

  render() {
      if(this.state.status == true){
            return(<Redirect to='/'></Redirect>)
      }
    return (
      <div>
        <h1 className="m-5">Insertar Hosptial</h1>
        <form onSubmit={this.insertaHospital} style={{ width: "700px", display: "table", margin: "auto" }}>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" ref={this.idHosRef} />
            <label >Id Hospital</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" ref={this.nomRef}/>
            <label >Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" ref={this.dirRef} />
            <label >Direccion</label>
          </div>

          <div className="form-floating mb-3">
            <input type="number" className="form-control" ref={this.telRef}/>
            <label >Telefono</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" ref={this.camRef}/>
            <label >Camas</label>
          </div>

          <button className="btn btn-success">Agregar Hospital</button>
        </form>
      </div>
    );
  }
}
