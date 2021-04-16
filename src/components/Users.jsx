import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../back/db/firebase'
const Users = () => {
    
const [users,setUsers]=useState([])
useEffect( ()=>{
   return firebase.db
      .collection("users")
      .onSnapshot((querySnap) => {
        let usuarios = [];
        querySnap.forEach((doc) => {
          usuarios.push(doc.data());
          });
          return setUsers(usuarios)
      });
},[])
console.log(users)
    
return (
        <>
        <table className="cars">
        <th COLSPAN="5">
         <h3>USUARIOS</h3>
      </th>
        <tr>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>EMAIL</th>
        <th>CREDITO</th>
        <th>HISTORIAL</th>
        </tr>
        {users.map(usuario =>(
            <tr>
            <td>
            <Link to={`/autos/${usuario.id}`} className='link2'>
                {usuario.name}
            </Link>
                </td>
            <td>{usuario.lastname}</td>
            <td>{usuario.email}</td>
            <td>{usuario.credit}</td>
            <td>{usuario.parkingHistory? usuario.parkingHistory.length : 0}</td>
        </tr>
        ))}
    </table>
  </>
    );
};

export default Users;