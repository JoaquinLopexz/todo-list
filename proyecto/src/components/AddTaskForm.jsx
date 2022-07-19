import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import AddBox from '@mui/icons-material/AddBox'

export const AddTaskForm = ({ handleAddTask, task, handleTareaChange }) => {

  return (
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
        value={task}
        placeholder='Write homework'
        required
        onChange={handleTareaChange}
        InputProps={{
          endAdornment: (
            <IconButton type='submit'>
              <InputAdornment position="end">
                <AddBox color="primary" />
              </ InputAdornment>
            </IconButton>
          )
        }}
      />
    </div>
  </form>
  )
}
