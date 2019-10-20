import React, { Component } from 'react'

import { MDBDataTable } from 'mdbreact';
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
                    label: 'Name',
                    field: 'description',
                    sort: 'asc',
                    width: 100
                  }
                ],
                rows: [
                ]
              },
              ro:[]
        }
    }
    componentDidMount() {
        let tasks = this.state.data.rows;
        let taCo=this.state.data.columns;
        fetch("http://localhost:8081/users").then((Response)=> Response.json())
        .then(category =>{
            var newTasks = tasks.concat([category]);
            console.log(newTasks);
            console.log("category")
            this.setState({data:{columns:taCo,rows:category}}); 
            this.setState({ro:category})
       
        })
      }
      
    render() {
        return (
            <div>
                <MDBDataTable
      striped
      hover
      data={this.state.data}
    />
                
            </div>
        )
    }
}
