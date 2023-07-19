import React, {useRef} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import "./App.css"
function Loginpage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

const email=useRef()
const password=useRef()
const localEmail = localStorage.getItem("email");
const localPassword = localStorage.getItem("password");
  
  const handleClose = () => {
    setOpen(false);
    if(email.current.value==localEmail &&password.current.value==localPassword) {
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
     
        alert("Hello"+" "+ localEmail);
    }
     
      else
      {
        alert("Invalid password or username!");
      }

 
    
   
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  
  return (

<div className='login'>
        
<Button variant="contained" color='warning' onClick={handleClickOpen} style={{marginLeft:"1060px", marginTop:"-645px"}}>
        Sign in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="filled"
            inputRef={email}
          />
           <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="filled"
            inputRef={password}
          ></TextField>
          <IconButton
          sx={{marginLeft:"490px",marginTop:"-90px"}}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{marginTop:"-60px",marginLeft:"150px"}}>OK</Button>
        </DialogActions>
      </Dialog>

      <br></br>



</div>

  )
}

export default Loginpage;