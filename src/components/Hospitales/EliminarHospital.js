import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
export default class EliminarHospital extends Component {

    //Para guardar el hospital que llega y sacar el nombre en el span
    state = {
        hospital:[],
        status: false
    }

    cargarHospital = () => {
        var id = this.props.idHos;
        var request = '/webresources/hospitales'+id;
        var url = Global.urlhospitales+request;
        axios.get(url).then(res =>{
            this.setState({
                hospital: res.data,
                status: true
            })
        })

    }

    eliminarHospital = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                <h1 className='m-5'>Eliminar HOSPITAL</h1>
                <h4 className='container'>¿Esta seguro de que quiere 
                eliminar el hospital <span>{this.state.hospital.nombre}</span> con id <span className='fw-bold fs-3'>{this.props.idHos}</span></h4>
                <button className='btn btn-danger m-5'>Eliminar hospital</button>
                </form>
            </div>
        )
    }
}
