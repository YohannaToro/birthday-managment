import React, { Component } from 'react'
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBRow,
    MDBCol,MDBInput
  } from "mdbreact";
  import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";
  import {
    MDBDataTable,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    Button,
    MDBBtn
  } from "mdbreact"
  import axios from 'axios'
  import { makeStyles} from '@material-ui/core/styles';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import TodoList from '../administrator/managment'
  import Side from '../sidebar'
export default class massive extends Component {
    constructor(props){
        super(props);
     
    this.state = {
        modal: false,modalB: false,
        apellido:""
      }
      
        this.toggle = this.toggle.bind(this);this.toggleB = this.toggleB.bind(this);
    this.handle=this.handle.bind(this);
    }
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      toggleB = () => {
        this.setState({
          modalB: !this.state.modalB
        });
      }
      handle=()=>{
        var lastname=this.state.apellido.trim();
        if( !lastname ){
            return;
          }
        axios.post('http://localhost:8081/users/massiveCvs',{
            apellido:lastname})
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
          <MDBContainer style={{"marginTop":"20%"}}>
            <MDBBtn onClick={this.toggle}>Massive file</MDBBtn>
            <MDBBtn onClick={this.toggleB}>Massive Images</MDBBtn>
            <MDBModal style={{"marginTop":"50%"}} isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader style={{"marginTop":"20%"}} toggle={this.toggle}>Massive CVS</MDBModalHeader>
              <MDBModalBody>
              <MDBInput label="path" 
               value={this.state.apellido}
               onChange={(e) => this.setState({apellido:e.target.value})}
              />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                <MDBBtn color="primary" onClick={this.handle}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
            <MDBModal style={{"marginTop":"50%"}} isOpen={this.state.modalB} toggle={this.toggleB}>
              <MDBModalHeader style={{"marginTop":"20%"}} toggle={this.toggleB}>Massive Images</MDBModalHeader>
              <MDBModalBody>
              <MDBInput label="path" 
               value={this.state.apellido}
               onChange={(e) => this.setState({apellido:e.target.value})}
              />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggleB}>Close</MDBBtn>
                <MDBBtn color="primary" onClick={this.handle}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
          </div>);
        }     
      
      
}
