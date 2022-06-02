import './App.css';
import axios from 'axios'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AddBox from '@mui/icons-material/AddBox' 
import { useState } from "react"
import IconButton from '@mui/material/IconButton'



function App() {

    const [tarea, setTarea] = useState()

    
  function addTarea (e) {
    setTarea(tarea)
  }


  

















return (
    <div className="App">
        <Typography variant="h3" component="h2">
         Bienvenido al Todo List
        </Typography>
        <form
        style={{
          display: "flex",
          justifyContent: "center"
        }}
        >
        <div>
          <TextField id="outlined-basic"  variant="outlined"
          name='tarea'
          value=''
          placeholder='Escribir tarea'
          InputProps={{
            endAdornment: (
              <IconButton>
                <InputAdornment position="end">
                  <AddBox />
                </ InputAdornment>
              </IconButton>
              
            ),  
          }}
        />
        </div>
          
   
    
    </form>
    </div>
   
  );
}

export default App;
