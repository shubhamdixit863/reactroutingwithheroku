import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";




const Login = () => {
    const [state, setstate] = useState({
        userName:"",
        password:""
    })


    const handleChange=(event)=>{
        setstate({...state,[event.target.name]:event.target.value});

    }

    const login=()=>{

        axios.post("http://localhost:8080/login",state).then(data=>{
            console.log(data["data"]);
        })

    }
    return (
        <div>
            <h1>
                Please Login Here
            </h1>

       

                 
                  <TextField id="outlined-basic" onChange={handleChange} name="userName" label="UserName" variant="outlined" />
                  <br></br>
                  <TextField id="outlined-basic" onChange={handleChange} name="password"  label="Password" variant="outlined" style={{marginTop:"30px"}} />
                  <br></br>

                  <Button variant="contained" onClick={login} style={{marginTop:"30px"}}>Login</Button>



        </div>
    )
}

export default Login
