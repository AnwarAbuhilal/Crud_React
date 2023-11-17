import React from 'react'

 function Input({id, title, type, name, value, getUserData, customClass, errors}) {
  console.log("prooooooooops");
    
  return (
    
    <div className='mb-3'>
     
      <label htmlFor={id} className={`form-label ${customClass}`} >{title}</label>
      <input type={type} className='form-control' id={id} name={name}  value={value} onChange={getUserData}/>
      {errors[name] && <p className='text-danger'>{errors[name]}</p>}
     </div>
     
  )
}
export default Input