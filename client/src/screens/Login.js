import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [creden, setCreden] = useState({email:'', password:''})
  let navigate = useNavigate();
  const inputChange = (e)=>{
      setCreden({...creden, [e.target.name]:e.target.value})
  } 
  const handleSubmit = async(e)=>{
      e.preventDefault();

      const response = await fetch('http://localhost:5000/api/loginuser',{
        method:'post', 
            headers : {
                "Content-Type" : "application/json"
            },    
            body:JSON.stringify({email:creden.email, password:creden.password})
          })
      const json = await response.json()
      console.log(json); 

      if(!json.success){
          alert("Enter valid Credentials")
      }
      if(json.success){
        navigate('/')
      }
  }
  return (
    <div className='container'>

    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name ='email' id="exampleInputEmail1" aria-describedby="email" onChange={inputChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="exampleInputPassword1" aria-describedby="password" onChange={inputChange}/>
        </div>

        <button type="submit" className="m-3 btn btn-primary">Submit</button>
        <Link to='/newuser' className='m-3 btn btn-danger'>New User </Link>
  </form>
</div>
  )
}

export default Login