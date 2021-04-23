import React,{useEffect, useState} from 'react'
import firebase from '../back/db/firebase'
const Support = ({id}) => {
    console.log(id)
const [messages,setMessages]=useState([])
const [call,setCall]=useState([])
const [admin,setAdmin]=useState({})
useEffect( ()=>{
   return firebase.db
      .collection("support")
      .doc(`${id}`)
      .onSnapshot((querySnap) => {
     return (setMessages(querySnap.data().mensaje) )
       
      });
},[])
useEffect( ()=>{
    return firebase.db
       .collection("support")
       .doc(`${id}`)
       .onSnapshot((querySnap) => {
      return (setCall(querySnap.data().mensajeLlamada
      ) )
        
       });
 },[])
 useEffect( ()=>{
    return firebase.db
       .collection("admin")
       .doc(`${id}`)
       .onSnapshot((querySnap) => {
       console.log(querySnap.data())
      return (setAdmin(querySnap.data()) )
        
       });
 },[])
console.log(admin)
return (
        <>
        <table className="cars">
        <th COLSPAN="6">
         <h3>MENSAJES</h3>
      </th>
        <tr>
        <th>USUARIO</th>
        <th>ASUNTO</th>
        <th >MENSAJE</th>
        <th>LLAMADA</th>
    
        </tr>
        {messages?.map(mensaje =>(
            <tr>
              
            <>
            <td >{admin.email}</td>
            <td >{mensaje.AsuntoM}</td>
            <td >{mensaje.Mensajes}</td>
            {call?.map(llamada=>(

                <td >{llamada.Asunto}</td>
            ))}
           </>
         
            
            
        </tr>
        ))}
    </table>
    
  </>
    );
};

export default Support;