import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class TablaHospitales extends Component {

    //Para coger los hospitales y pintarlos
    state = {
        hospitales:[],
        status: false
    }  

    cargarHospitales = () =>{
        var request = '/webresources/hospitales';
        var url = Global.urlhospitales+request;
        axios.get(url).then(res =>{
            this.setState({
                hospitales: res.data,
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.cargarHospitales();
    }

    render() {
        return (
            <div className='container'>
                <h1 className='m-4'>HOSPITALES</h1>
                <NavLink className='btn btn-success m-5' to={'insertarhospital'}>Agregar hospital</NavLink>
                <table className='table table-info table-striped'>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>DIRECCION</th>
                        <th>TELEFONO</th>
                        <th>CAMAS</th>
                        <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.hospitales.map((hos, index)=>{
                        return(<tr key={index}>
                            <td>{hos.idhospital}</td>
                            <td>{hos.nombre}</td>
                            <td>{hos.direccion}</td>
                            <td>{hos.telefono}</td>
                            <td>{hos.camas}</td>
                            <td>
                            <NavLink className='btn btn-danger m-5' to={'eliminarhospital/'+hos.idhospital}>X</NavLink>
                            </td>
                            </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
