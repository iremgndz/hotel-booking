import React, { useRef,useEffect,useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


 function Register() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

const name=useRef()
const email=useRef()
const password=useRef()
const [showHome,setShowHome]=useState(false)
const [show,setShow]=useState(false)
const localSignUp = localStorage.getItem("signUp");
const localEmail = localStorage.getItem("email");
const localName = localStorage.getItem("name");

useEffect(()=>{
  if(localSignUp){
    setShowHome(true)
  }
  if(localEmail){
    setShow(true)
  }
})
const handleClick=()=>{
 
    setOpen(false);
 
  if(name.current.value&&email.current.value&&password.current.value) {
    localStorage.setItem("name",name.current.value)
    localStorage.setItem("email",email.current.value)
    localStorage.setItem("password",password.current.value)
    localStorage.setItem("signUp",email.current.value)
    alert("Account created successfully!")
    window.location.reload()
  }
}

  return (
    <div>
      
      
      <Button variant="contained" onClick={handleClickOpen} style={{ marginLeft: "1155px", marginTop: "-688px" }}>
          Register
        </Button>
        <Dialog open={open} onClose={handleClick}>
           <DialogTitle>Hello {localName}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <TextField
                required
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
                variant="standard"
                inputRef={name} />
              <TextField
                required
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                inputRef={email} />
              <TextField
                required
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                inputRef={password} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClick}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
      
      
    </div>
 
  )
}
export default Register