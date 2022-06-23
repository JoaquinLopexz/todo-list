// https://todoapplication.getsandbox.com/todo
import './App.css';
import axios from 'axios'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AddBox from '@mui/icons-material/AddBox'
import { useEffect, useState } from "react"
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel'
import { MenuItem } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input'
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';
import SendIcon from '@mui/icons-material/Send';
import { red, green, grey} from '@mui/material/colors';

function App() {
  const [btn1, setBtn1] = useState(false)
  const [tarea, setTarea] = useState('')
  const [selected, setSelected] = useState('')
  const [isEditable, setIsEditable] = useState('')
  const [isCheck, setIsCheck] = useState('')
  const [isDelete, setIsDelete] = useState('')
  const [error, setError] = useState('')
  const [tareas, setTareas] = useState([])

  const handleTareaChange = (event) => {
    if (error.length > 0) {
      setError('')
    }
    setTarea(event.target.value)
  }

  function deleteTarea(id) {
    axios
      .delete('https://joaco.getsandbox.com/todo/' + id)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    axios
      .get('https://joaco.getsandbox.com/todo')
      .then(res => setTareas(res.data))
      .catch(error => console.log(error))
  }, [])

  const x = () => {
    setTarea(tarea);
  }

  const selectiononChange = (e) => {
    setSelected(e.target.value)
  }

  // useEffect(() => {
  //   if(tarea.length > 0)
  //     return alert('Debes asignar un titulo a la tarea')
  // })

  //   if()

  const handleAddTask = (event) => {
    event.preventDefault()

    if (tarea.length === 0) {
      setError('Debes asignar un titulo a la tarea')
    } else {
      // crear objeto a enviar
      const newTask = {
        id: uuidv4(),
        tarea: tarea,
        completado: false
      }
      // usar axios.post y enviar
      axios
        .post('https://joaco.getsandbox.com/todo', newTask)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    setTarea('')
  }

  return (
    <div className="App">
      <div className='container-form'>
        <Typography variant="h3" component="h2">
          Bienvenido al Todo List
        </Typography>

        <form
          className='form-control'
          onSubmit={handleAddTask}
        >
          <div>
            <TextField
              style={{ backgroundColor: 'white', marginRight: '10px', borderRadius: '0.2em' }}
              id="outlined-basic"
              variant="outlined"
              name='tarea'
              value={tarea}
              placeholder='Escribir tarea'
              required
              onChange={handleTareaChange}
              InputProps={{
                endAdornment: (
                  <IconButton type='submit'>
                    <InputAdornment position="end">
                      <AddBox color="primary" />
                    </ InputAdornment>
                  </IconButton>
                ),
              }}
            />
          </div>

          <div style={{ width: '20%', marginLeft: '10px' }}>
            <FormControl fullWidth>
              <InputLabel>Filtrar por estado</InputLabel>
              <Select value={selected} onChange={selectiononChange} style={{ backgroundColor: 'white' }}  >
                <MenuItem value={1}>Todas las tareas</MenuItem>
                <MenuItem value={2}>Tareas pendientes</MenuItem>
                <MenuItem value={3}>Tareas completadas</MenuItem>
              </Select>
            </FormControl>
          </div>
        </form>
      </div>

      {
        error.length > 0
          ? <span style={{ color: 'red' }}>{error}</span>
          : null
      }

      {/* TODO CARD */}
      <div className='segundoconteiner'>
        {
          tareas.map(element => {

            console.log(element)

            return (

              <div className='todoCard' key={element.id}>
                {/* input */}
                <div>
                  <TextField disabled={!(isEditable === element.id)} type='text' defaultValue={element.tarea}/>
                </div>

                <div className='todoCard-buttons'>
                  {isEditable === element.id
                    ? <IconButton arial-label="check" >
                      <SendIcon fontSize="small" />
                    </IconButton>
                    : <>
                      <div className='todoCard-button-check' >
                        <IconButton arial-label="check">
                          <CheckIcon fontSize="small" sx={{ color: grey[50] }}/>
                        </IconButton>
                      </div>
                      
                      <div className='todoCard-button-delete' >
                        <IconButton onClick={() => deleteTarea(element.id)}>
                          <DeleteIcon fontSize="small" sx={{ color: grey[50] }} />
                        </IconButton>
                      </div>

                      <div className='todoCard-button-edit' >
                        <IconButton onClick={() => setIsEditable(element.id)} aria-label="delete" size="small">
                          <EditIcon fontSize="small" sx={{ color: grey[50] }} />
                        </IconButton>
                      </div>
                    </>
                  }
                </div>
              </div>
            )
          })
        }
      </div>

      {/* {
      !btn1
        ? <>
            <button>Check</button>
            <button>Basura</button>
            <button onClick={() => setBtn1(true)}>Lapiz</button>
        </>
        : <button onClick={() => setBtn1(false)}>Send</button>
    } */}
    </div>
  );
}

export default App;
