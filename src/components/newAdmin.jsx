import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import firebase from '../back/db/firebase'



const NewAdmin = () => {
    const history= useHistory()
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        zone:""
      });

      const handleChangeText = (value,e) => {
          
        setInput({ ...input, [value]: e.target.value });
      };

     console.log(input)

      const handleSubmit = (event) => {
        saveNewUser()
        event.preventDefault();
        
      }
    

    const saveNewUser = () => {
        const { name, lastname, email, password,zone } = input;
        firebase.auth
          .createUserWithEmailAndPassword(email, password)
          .then((cred) => {
            return firebase.db
              .collection("admin")
              .doc(cred.user.uid)
              .set({
                id: cred.user.uid,
                name,
                lastname,
                email,
                zone,
                workedDays:[]
              })
              .then(() => {
                 console.log("admin registrado exitosamente");
                 
                 setInput({
                    name: "",
                    lastname: "",
                    email: "",
                    password: "",
                    zone:""
                  })
                 
                  history.push("/admins")
                })
       
          })
          .catch((error) => alert("Registro incorrecto", error.message));
        }
    return (
        <div >
        <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
         
              <p>

            Nuevo Admin
              </p>
              <div className='separator'></div>
            
            <input type="text" name="name" placeholder='nombre' onChange={(e)=> handleChangeText('name', e )}/>
            <input type="text" name="lastname" placeholder='apellido'onChange={(e)=> handleChangeText('lastname', e )}/>
            <input type="email" name="email" placeholder='email'onChange={(e)=> handleChangeText('email', e )}/>
            <input type="password" name="password" placeholder='contraseña'onChange={(e)=> handleChangeText('password', e )}/>
            <input type="text" name="block" placeholder='cuadra'onChange={(e)=> handleChangeText('zone', e )}/>
           
           
        
          <input type="submit" value="ENVIAR" name='submit' className='submit'/>
        </form>
        <p className='boton'>
        <Link to='/admins' className='link'>
            VOLVER
        </Link>
        </p>
      </div>
    );
};

export default NewAdmin;