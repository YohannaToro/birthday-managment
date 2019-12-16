import React, { Component } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol
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

export default class managment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      updateValue: {
        apellido:"",
        correo:"",
        dia:"",
        mes:"",
        perfil:"",
        observacion:""
      },
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      data: {
        columns: [
          {
            label: "Apellido",
            field: "apellido",
            sort: "asc",
            width: 150
          },
          {
            label: "Block",
            field: "block",
            width: 100
          }
        ],
        rows: []
      },
      ro: []
    };
    this.toggle = this.toggle.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
  }

  handleClick() {
    console.log("holiiii :(");
  }
  handleUpdate(){
    let modalNumber = "modal4";
    this.setState({ [modalNumber]: !this.state[modalNumber] });
    console.log("hiiii")
    console.log(this.state.updateValue)
    var k= axios.get('http://localhost:8081/users/'+this.state.id)
    console.log(k)
    var obj;var i;
    for (i = 0; i < this.state.data.rows.length; i++) {
      var dataIn = this.state.data.rows[i];
      if (dataIn.apellido === this.state.id) {
        console.log("holiii");
    
        obj=Object.assign(dataIn,this.state.updateValue)
        console.log("obj")
        console.log(obj)
        this.setState({ updateValue: dataIn });
      }
    }
    

    
    axios.put('http://localhost:8081/users/update', obj).then(response => {
      console.log("todo funca")
    }, response => {
      this.handleEditError(response)
    });

  
  }

  componentDidMount() {
    let tasks = this.state.data.rows;
    let taCo = this.state.data.columns;
    fetch("http://localhost:8081/users")
      .then(Response => Response.json())
      .then(category => {
        var i;
        var list = [];
        for (i = 0; i < category.length; i++) {
          var aiuda = {
            apellido: category[i].apellido,

            update: (
              <MDBBtn
                color="green"
                id={category[i].apellido}
                onClick={this.toggle}
                size="sm"
              >
                Block
              </MDBBtn>
            )
          };
          list.push(aiuda);
        }

        var newTasks = tasks.concat([category]);

        this.setState({ data: { columns: taCo, rows: list } });
        this.setState({ ro: category });
      });
  }

  toggle(e) {
    console.log(e.target.id);
    this.setState({id:e.target.id})
    let modalNumber = "modal2";
    this.setState({ [modalNumber]: !this.state[modalNumber] });
    var i;
    console.log(this.state.data)
    for (i = 0; i < this.state.data.rows.length; i++) {
      var dataIn = this.state.data.rows[i];
      if (dataIn.apellido === e.target.id) {
        console.log("holiii");
        this.setState({ updateValue: dataIn });
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
      <MDBContainer style={{marginTop:'10%'}}>
        <MDBCol md='3'/>
        <MDBCol md='6'>
        <MDBCard style={{'width':'150%'}}>
          <MDBCardHeader
            tag="h3"
            className="text-center font-weight-bold text-uppercase py-4"
          >
            Block users
          </MDBCardHeader>
          <MDBCardBody>
            <MDBDataTable btn hover data={this.state.data} striped bordered />
            <MDBModal isOpen={this.state.modal2} toggle={this.toggle} size="md">
              <MDBModalHeader toggle={this.toggle} className="modal-u" >Update User</MDBModalHeader>
              <MDBModalBody>
                <MDBRow>
                <MDBCol md="2"></MDBCol>
                  <MDBCol md="8">
                    <form>
                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        Update name
                      </label>
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        value={this.state.updateValue.apellido}
                        onChange={(e) => this.setState({updateValue: {apellido:e.target.value}})}
                      />
                      <br />
                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Update email
                      </label>
                      <input
                        type="email"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        value={this.state.updateValue.correo}
                        onChange={(e) => this.setState({updateValue: {correo:e.target.value}})}
                      />
                        <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Update day
                      </label>
                      <input
                        type="text"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        value={this.state.updateValue.dia}
                        onChange={(e) => this.setState({updateValue: {dia:e.target.value}})}
                      />
                        <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Update Month
                      </label>
                      <input
                        type="email"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        value={this.state.updateValue.mes}
                        onChange={(e) => this.setState({updateValue: {mes:e.target.value}})}
                      />
                        <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Update profile
                      </label>
                      <input
                        type="text"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        value={this.state.updateValue.perfil}
                        onChange={(e) => this.setState({updateValue: {perfil:e.target.value}})}
                      />
                      
                      
         
                    
     
     

<label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Update observation
                      </label>
                      <input
                        type="email"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        value={this.state.updateValue.observacion}
                        onChange={(e) => this.setState({updateValue: {observacion:e.target.value}})}
                      />
                      <div className="text-center py-4 mt-3">
                      </div>
                    </form>
                    <MDBCol md="2"></MDBCol>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="black" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="green" onClick={this.handleUpdate}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
             


          </MDBCardBody>
          
       
        </MDBCard>
        </MDBCol>
        <MDBCol md='3'/>
        </MDBContainer>
      </div>
    );
  }
}
