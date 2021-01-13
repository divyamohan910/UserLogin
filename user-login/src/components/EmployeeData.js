import React, { Component } from 'react'
import employeejson from '../json/employeeList.json'
import '../../src/css/style.css'

export class EmployeeData extends Component {
    render() {
        return (
            <div>
                
                <h1>Employee Data</h1>
                {employeejson.map((item,index)=>{
                    return <table id="customers">
                        <tr>
    <th>id</th>
    <th>name</th>
    <th>age</th>
    <th>gender</th>
    <th>email</th>
    <th>phone number</th>
  </tr>
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.gender}</td>
    <td>{item.email}</td>
    <td>{item.phoneNo}</td>
  </tr>
                       </table>
                })}
            </div>
        )
    }
}

export default EmployeeData
