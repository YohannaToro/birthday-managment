import React, { Component } from 'react'

import { MDBDataTable ,MDBCard, MDBCardHeader, MDBCardBody,Button,MDBBtn} from 'mdbreact';
import ModalUpdate from '../additions/modalUpdate'
import axios from 'axios'
export default class managment extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{
                columns: [
                  {
                    label: 'Apellido',
                    field: 'apellido',
                    sort: 'asc',
                    width: 150
                  },
                  {
                    label: 'Dia',
                    field: 'dia',
                    sort: 'asc',
                    width: 270
                  },
                  {
                    label: 'Mes',
                    field: 'mes',
                    sort: 'asc',
                    width: 200
                  },
                  {
                    label: 'Correo',
                    field: 'Correo',
                    sort: 'asc',
                    width: 100
                  },
                  {
                    label: 'Perfil',
                    field: 'perfil',
                    sort: 'asc',
                    width: 150
                  },
                  {
                    label: 'Observacion',
                    field: 'observacion',
                    sort: 'asc',
                    width: 100
                  },
                  {
                    label: 'Update',
                    field: 'update',
                    width: 100
                  }
                ],
                rows: [

                  
                ]
              },
              ro:[]
        }
    }

    handleClick(){
      console.log("holiiii :(")

    }
    componentDidMount() {
        let tasks = this.state.data.rows;
        let taCo=this.state.data.columns;
        fetch("http://localhost:8081/users").then((Response)=> Response.json())
        .then((category) =>{
          var i;var list=[]
for (i = 0; i < category.length; i++) {
  var aiuda={
    apellido:category[i].apellido,
    dia:category[i].dia,
    mes:category[i].mes,
    correo:category[i].correo,
    perfil:category[i].perfil,
    observacion:category[i].observacion,
    update: <MDBBtn color="green" onClick={this.handleClick} size="sm">Update</MDBBtn>
  }
 list.push(aiuda)
}
            
            console.log("heeeeeeeeeeeeelp")
            console.log(category)
            var newTasks = tasks.concat([category]);
            console.log(list);
            console.log("category")
            this.setState({data:{columns:taCo,rows:list}}); 
            this.setState({ro:category})
       
        })
      }
      
    render() {
        return (
            <div>
              <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        All users
      </MDBCardHeader>
      <MDBCardBody>
                <MDBDataTable btn
     
      hover
      data={this.state.data}
      striped bordered 
     
    />
    
          </MDBCardBody></MDBCard>      
            </div>
        )
    }
}
