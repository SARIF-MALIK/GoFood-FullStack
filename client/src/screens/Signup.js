import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
export default function Signup() {
    const [creden, setCreden] = useState({name:'', email:'', password:'', geolocation:''})
    let navigate = useNavigate();
    const inputChange = (e)=>{
        setCreden({...creden, [e.target.name]:e.target.value})
    } 
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method:'post', 
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({name:creden.name, email:creden.email, password:creden.password, location:creden.geolocation})
        })

        const json = await response.json()
        console.log(json); 

        if(!json.success){
            alert("Enter valid Credentials")
        }
        if(json.success){
            navigate('/login')
        }
    }
  return (
    <div className='container'>

          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={creden.name} onChange={inputChange}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" name ='email' id="exampleInputEmail1" aria-describedby="email" onChange={inputChange}/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" name='password' id="exampleInputPassword1" aria-describedby="password" onChange={inputChange}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input type="text" className="form-control" id="location" name='geolocation' aria-describedby="location" onChange={inputChange}/>
              </div>

              <button type="submit" className="m-3 btn btn-primary">Submit</button>
              <Link to='/login' className='m-3 btn btn-danger'>Already a User </Link>
        </form>
    </div>
  )
}
