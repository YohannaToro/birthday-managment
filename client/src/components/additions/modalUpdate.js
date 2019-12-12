import React, { Component } from "react";
import Side from '../sidebar'
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from '../administrator/managment'
import ImageUploader from 'react-images-upload';
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
import logo from '../../laboratorioInformaticaLogo.png'
export default class cahngeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
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
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    var k=this.state.pictures;
    k.concat(picture)
    this.setState({
        pictures: k
    });
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
                Photo
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
  toggle2(e) {
    console.log(e.target.id);
   // this.setState({id:e.target.id})
    let modalNumber = "modal3";
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

        <MDBCard style={{'width':'150%'}}>
          <MDBCardHeader
            tag="h3"
            className="text-center font-weight-bold text-uppercase py-4"
          >
            All users
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
                      <div className="row">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
      </div>
      <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                    </form>
                    <MDBCol md="2"></MDBCol>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="black" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="green" onClick={this.toggle}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
             


          </MDBCardBody>
          
        </MDBCard>
      
      </div>
    );
  }
}
