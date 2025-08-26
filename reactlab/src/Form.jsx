import React, { useState } from 'react';

function Form(){
    const [formData, setFormData]=useState({name:'',email:'',age:''});
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(formData);
        console.log('hello');
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label >Name:<input type="text" name="name" onChange={handleChange}/> </label>
            <label >Email:<input type="email" name="email" onChange={handleChange}/> </label>
            <label >Age:<input type="number" name="age" onChange={handleChange}/> </label>
            <button type="submit">Submit</button>
            <div>{JSON.stringify(formData)}</div>

        </form>
        </>
    )
}

export default Form;