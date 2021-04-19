import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
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

const deleteUser = (id) => {
  return firebase.db
       .collection("users")
       .doc(id)
       .delete()
       .then(()=>{console.log('admin eliminado correctamente')})
     .catch((error) => alert("eliminado incorrectamente", error.message));
 }

    
return (
        <>
        <table className="cars">
        <th COLSPAN="6">
         <h3>USUARIOS</h3>
      </th>
        <tr>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>EMAIL</th>
        <th>CREDITO</th>
        <th>HISTORIAL</th>
        <th></th>
        </tr>
        {users.map(usuario =>(
            <tr>
            <td className='user'>
            <Link to={`/autos/${usuario.id}`} className='link2'>
                {usuario.name}
            </Link>
                </td>
            <td >{usuario.lastname}</td>
            <td>{usuario.email}</td>
            <td>{usuario.credit}</td>
            <td>{usuario.parkingHistory? usuario.parkingHistory.length : 0}</td>
            <td><p className='clickeable'><FontAwesomeIcon icon={faTrashAlt} color="black" size="2x" onClick={()=>{deleteUser(usuario.id)}}/></p></td>
        </tr>
        ))}
    </table>
    
  </>
    );
};

export default Users;