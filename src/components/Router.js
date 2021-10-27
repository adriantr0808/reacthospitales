import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MenuHospitales from './Hospitales/MenuHospitales'
import TablaHospitales from './Hospitales/TablaHospitales'
import InsertarHospital from './Hospitales/InsertarHospital'
import EliminarHospital from './Hospitales/EliminarHospital'

export default class Router extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                <MenuHospitales/>
                    <Switch>
                        <Route exact path='/' component={TablaHospitales}/>
                        <Route exact path='/insertarhospital' component={InsertarHospital}/>
                        <Route exact path='/eliminarhospital/:id' 
                        render = {props => {
                            var id = props.match.params.id;
                            return(<EliminarHospital idHos={id}/>)
                        }}

                        />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
