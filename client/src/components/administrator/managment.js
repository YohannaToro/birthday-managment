import React, { Component } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon
} from "mdbreact";
import {
  MDBDataTable,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  Button,
  MDBBtn
} from "mdbreact"
import axios from 'axios'
import ModalUpdate from "../additions/modalUpdate";

export default class managment extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            label: "Dia",
            field: "dia",
            sort: "asc",
            width: 270
          },
          {
            label: "Mes",
            field: "mes",
            sort: "asc",
            width: 200
          },
          {
            label: "Correo",
            field: "Correo",
            sort: "asc",
            width: 100
          },
          {
            label: "Perfil",
            field: "perfil",
            sort: "asc",
            width: 150
          },
          {
            label: "Observacion",
            field: "observacion",
            sort: "asc",
            width: 100
          },
          {
            label: "Update",
            field: "update",
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
    
    axios.patch('http://localhost:8081/users/update', this.state.updateValue);

  
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
            dia: category[i].dia,
            mes: category[i].mes,
            correo: category[i].correo,
            perfil: category[i].perfil,
            observacion: category[i].observacion,
            update: (
              <MDBBtn
                color="green"
                id={category[i].apellido}
                onClick={this.toggle}
                size="sm"
              >
                Update
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
    let modalNumber = "modal4";
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
        <MDBCard>
          <MDBCardHeader
            tag="h3"
            className="text-center font-weight-bold text-uppercase py-4"
          >
            All users
          </MDBCardHeader>
          <MDBCardBody>
            <MDBDataTable btn hover data={this.state.data} striped bordered />
            <MDBModal isOpen={this.state.modal4} toggle={this.toggle} size="lg">
              <MDBModalHeader toggle={this.toggle}>Update User</MDBModalHeader>
              <MDBModalBody>
                <MDBRow>
                  <MDBCol md="6">
                    <form>
                      <p className="h4 text-center py-4">Subscribe</p>
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
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary" onClick={this.handleUpdate}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
