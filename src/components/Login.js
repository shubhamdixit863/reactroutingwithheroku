import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




const Login = () => {
    return (
        <div>
            <h1>
                Please Login Here
            </h1>

       

                 
                  <TextField id="outlined-basic" label="UserName" variant="outlined" />
                  <br></br>
                  <TextField id="outlined-basic" label="Password" variant="outlined" style={{marginTop:"30px"}} />
                  <br></br>

                  <Button variant="contained" style={{marginTop:"30px"}}>Login</Button>



        </div>
    )
}

export default Login
