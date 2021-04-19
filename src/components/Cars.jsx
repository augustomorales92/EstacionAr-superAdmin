import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../back/db/firebase'
const Cars = ({id}) => {
    const [cars,setCars]=useState([])
   
   
    
    
    useEffect( ()=>{
   return firebase.db
      .collection("users")
      .doc(`${id}`)
      .collection('CARS')
      .onSnapshot((querySnap) => {
        let autos = [];
        querySnap.forEach((doc) => {
          autos.push(doc.data());
          });
          return setCars(autos)
      });
},[])


console.log(cars)
    return (
      <>
        <table className="cars">
        <th COLSPAN="4">
         <h3>DUEÑO</h3>
      </th>
            <tr>
            
            <th>PATENTE</th>
            <th>MODELO</th>
            <th>AÑO</th>
            <th>MARCA</th>
            </tr>
            {cars.map(auto=>(
            <tr >

               
                <td>{auto.patente}</td>
                <td>{auto.modelo}</td>
                <td>{auto.año}</td>
                <td>{auto.marca}</td>
            </tr>
                ))}
        </table>
        <p className='boton'>
          <Link to='/usuarios' className='link'>
      VOLVER
          </Link>
    </p>
      </>
    );
};

export default Cars;