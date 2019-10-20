import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from '../administrator/managment'
import Side from '../sidebar'
export default class createuser extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                
                    nombre:"",
                    apellido:"",
                    dia:0,
                    mes:0,
                    correo:"",
                    perfil:"",
                    observacion:""
                    
            }
        }
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
          <form>
            <p className="h5 text-center mb-4">Create User</p>
            <div className="grey-text">
              <MDBInput
                label="name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Full name"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="dia"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="mes"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="email"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="profile"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Observation"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
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
