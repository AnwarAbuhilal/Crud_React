import axios from 'axios';
import React, {  useState, useEffect } from 'react'
import {toast} from 'react-toastify';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { validationUserData } from '../../validation/uservalidation';
import Input from '../../shared/Input';
import Loader from '../Loader.jsx';



export default function Edit() {

  const navigate= useNavigate();
  let [errors, setErrors]= useState({
    name:'',
    email: '',
    password:'',
  });

  const [user, setUser]= useState({
    name:'',
    email: '',
    password:'',
  });

  const {id}= useParams('id');
 
  const getUser= async()=>{
      
      const {data}= await axios.get(`https://crud-users-gold.vercel.app/users/${id}`);
      setUser(data.user);
     
      
  }
  useEffect(()=>{
      getUser(),[]
  })

  const [backendError, setBackendError]= useState('');

  let [loader, setLoader]= useState(false);
  
  
  const getUserData= (e)=>{
    // const  tt= e.target.value;
    
  const {name, value}= e.target;
   console.log("in onchane: " + value);
  setUser({...user,[name]:value});
  //  setUser(user);
   
  
  }
  const sendData= async(e)=>{
    e.preventDefault();
    setLoader(true);
    console.log("hiiiiiiiii");
    console.log(user);
    if(Object.keys(validationUserData(user)).length>0){
      setErrors(validationUserData(user));
         setLoader(false);
    }
    else{
      try{
        const {data}= await axios.post("https://crud-users-gold.vercel.app/users/",user);
   
    // console.log(data);
    if(data.message== 'success'){
      toast("user added successfuly");
      navigate('/user/index');
      setLoader(false);
   }
  }
   catch(error){
    setBackendError(error.response.data.message);
    setErrors([]);
    setLoader(false);
      }
    
    }

  }

  if(loader){
    return(
      <>
      <Loader/>

      </>
      
    )
  }



  return (
    <form onSubmit={sendData}>
     
     <div className='mb-3'>

      <p className='text-danger'>{backendError}</p>
      <Input type={'text'} title={'user Name'} id={'userName'} name={'name'} value={user.name} errors={errors} getUserData={getUserData}/>
      {/* {errors.name && <p className='text-danger'>{errors.name}</p>} */}
      <Input type={'email'} title={'user Email'} id={'userEmail'} name={'email'} value={user.email} errors={errors} getUserData={getUserData}/>
      {/* {errors.email && <p className='text-danger'>{errors.email}</p>} */}
      <Input type={'password'}  title={'user pass'} id={'userPassword'} name={'password'} value={user.password} errors={errors} getUserData={getUserData}  customClass="bg-danger"/>
      {/* {errors.password && <p className='text-danger'>{errors.password}</p>} */}
      
     </div>

     


     <div className='mb-3'>
      <input type='submit' className='form-control' value='Update user' />
     </div>

    </form>
  )


  
}
