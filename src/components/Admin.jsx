import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../back/db/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Admins = () => {
    
const [Admins,setAdmins]=useState([])
useEffect( ()=>{
   return firebase.db
      .collection("admin")
      .onSnapshot((querySnap) => {
        let usuarios = [];
        querySnap.forEach((doc) => {
          usuarios.push(doc.data());
          });
          return setAdmins(usuarios)
      });
},[])


const deleteAdmin = (id) => {
     return firebase.db
          .collection("admin")
          .doc(id)
          .delete()
          .then(()=>{console.log('admin eliminado correctamente')})
        .catch((error) => alert("eliminado incorrectamente", error.message));
    }

    
return (
        <>
        <div className="newAdmin">
            <Link to='/admins/nuevoadmin' className='link3'>
        AGREGAR NUEVO TRABAJADOR        
            </Link>
        </div>
        <table className="cars">
        <th COLSPAN="5">
         <h3>TRABAJADORES</h3>
      </th>
        <tr>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>EMAIL</th>
        <th>ZONA</th>
        <th></th>
        </tr>
        {Admins.map(admin =>(
            <tr>
            <td className='user'>  <Link to={`/support/${admin.id}`} className='link2'>
                {admin.name}
            </Link></td>
            <td>{admin.lastname}</td>
            <td>{admin.email}</td>
            <td>{admin.zone}</td>
            <td><p className='clickeable'><FontAwesomeIcon icon={faTrashAlt} color="black" size="2x" onClick={()=>{deleteAdmin(admin.id)}}/></p></td>
        </tr>
        ))}
    </table>
    
  </>
    );
};

export default Admins;