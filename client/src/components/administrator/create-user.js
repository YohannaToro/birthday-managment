import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from '../administrator/managment'
import Side from '../sidebar'
import axios from 'axios'
export default class createuser extends Component {
    constructor(props){
        super(props);
        this.state={
                    nombre:"",
                    apellido:"",
                    dia:0,
                    mes:0,
                    correo:"",
                    perfil:"",
                    observacion:""
                    
            }
        }
    handleNombre(e){
      this.setState({nombre:e.target.value})
    }
handleApellido(e){
this.setState({apellido:e.target.value})
    }
    handleCorreo(e){
      this.setState({correo:e.target.value})
    }
    handleDia(e){
      this.setState({dia:e.target.value})
    }
    handleMes(e){
      this.setState({mes:e.target.value})
    }
    handlePerfil(e){
      var x=""
      var tmp=e.target.value;

      if (tmp==="4"){x="Rector"}
      if (tmp==="1"){x="Decano"}
      if (tmp==="2"){x="Profesor"}
      if (tmp==="3"){x="Estudiante"}
      if (tmp==="4"){x="Graduado"}
      this.setState({perfil:x})
    }
    handleObservacion(e){
      this.setState({observacion:e.target.value})
    }
    handleSubmit(e){
      e.preventDefault()
      console.log("holi")
      var nickname=this.state.nombre.trim();
      var lastname=this.state.apellido.trim()
      console.log(this.state.dia)
      var day=this.state.dia.trim();
      var month=this.state.mes.trim();
      var correo=this.state.correo.trim();
      if(!nickname || !lastname || !day || !month){
        return;
      }

      axios.post('http://localhost:8081/users/add',{
        nombre:nickname,
        apellido:lastname,
        dia:day,
        mes:month,
        correo:correo,
        perfil:this.state.perfil,
        observacion:this.state.observacion
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    render() {
        return (
            <div>
                <CssBaseline />
      <AppBar>
        <Toolbar className="nav-changes">
          <Side/>
        </Toolbar>
      </AppBar>
      
            <MDBContainer style={{marginTop:'10%',justifyContent:'center'}}>
      <MDBRow>
          <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <form onSubmit={e => this.handleSubmit(e)}>
            <p className="h5 text-center mb-4">Create User</p>
            <div className="grey-text">
              <MDBInput
                label="name"
                icon="user"
                group
                type="text"
                validate
                value={this.state.nombre}
                onChange={e => this.handleNombre(e)}
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Full name"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                value={this.state.apellido}
                onChange={e => this.handleApellido(e)}
                success="right"
              />
              <MDBInput
                label="dia"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                value={this.state.dia}
                onChange={e => this.handleDia(e)}
                success="right"
              />
              <MDBInput
                label="mes"
                icon="tag"
                group
                type="text"
                validate
                value={this.state.mes}
                onChange={e => this.handleMes(e)}
                error="wrong"
                success="right"
              />
              <MDBInput
                label="email"
                icon="tag"
                group
                type="text"
                validate
                value={this.state.correo}
                onChange={e => this.handleCorreo(e)}
                error="wrong"
                success="right"
              />
                <select className="browser-default custom-select" onChange={e=>this.handlePerfil(e)}>
          <option>Choose your Profile</option>
          <option value="1">Decano</option>
          <option value="2">Profesor</option>
          <option value="3">Estudiante</option>
          <option value="4">Graduado</option>
          <option value="5">Rector</option>
        </select>

              <MDBInput
                type="textarea"
                rows="2"
                label="Observation"
                icon="pencil-alt"
                value={this.state.observacion}
                onChange={e => this.handleObservacion(e)}
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary" type="submit">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>      </div>
        )
    }
}
