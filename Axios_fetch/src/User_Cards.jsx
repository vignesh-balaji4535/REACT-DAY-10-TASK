import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function User_Cards({obj,rerender,setRerender}) {

const handleDelete=(id)=>{
  const conf=window.confirm('Do you want to Delete this card')
  if(conf){
    axios.delete('https://6558edfce93ca47020a9e776.mockapi.io/dummyjson/posts/'+id)
    .then((res)=>{
      console.log(res)
      alert("record has been Delete")
      setRerender(!rerender)
    
    }).catch((err)=>console.log(err))
  }
}







  return (
    <div>
        <div className="col-sm-12 col-lg-6 m-5"></div>
        <div className="card text-center">
  <div className="card-header d-flex align-items-center">
  <p className='m-0'>Axios Fetched Data FROM Json Server </p>
  </div>
  <div className="card-body d-flex flex-column justify-content-center text-start m-3">

    <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Street</th>
      <th scope="col">Lat</th>
      <th scope="col">Lng</th>
      <th scope="col">City</th>

    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">{obj.id}</th>
      <td>{obj.name}</td>
      <td>{obj.username}</td>
      <td>{obj.email}</td>
      <td>{obj.street}</td>
      <td>{obj.lat}</td>
      <td>{obj.lng}</td>
      <td>{obj.city}</td>
  
    </tr>
    </tbody>
  </table>
  </div>
  <div className="card text-body-secondary d-flex flex-row justify-content-evenly p-3">
   
      <Link to={`/edit/${obj.id}`} type="button" className="btn btn-outline-primary">Edit Data</Link >
      <button type="button" onClick={e=>handleDelete(obj.id)}  className="btn btn-outline-danger">Delete Data</button>
 
  </div>
       <div className="card-footer text-body-secondary">
              2 days ago
        </div>
</div>
    </div>
  )

 

  
}

export default User_Cards