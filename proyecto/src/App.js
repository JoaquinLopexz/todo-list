import './App.css';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AddTaskForm } from './components/AddTaskForm';
import { deleteTask } from './helpers/helpDeleteTask';
import { Buttons } from './components/Buttons';
import { FormSelect } from './formControl/FormSelect';

function App() {
  const [task, setTastk] = useState('');
  const [selected, setSelected] = useState('');
  const [isEditable, setIsEditable] = useState('');
  const [error, setError] = useState('');
  const [works, setWorks] = useState([]);

  const handleTaskChange = (event) => {
    if (error.length > 0) {
      setError('');
    }
    setTastk(event.target.value);
  }

  useEffect(() => {
    axios
      .get('https://joaco.getsandbox.com/todo')
      .then(res => setWorks(res.data))
      .catch(error => console.log(error))
  }, []);

  const selectiononChange = (e) => {
    setSelected(e.target.value);
  }

  // useEffect(() => {
  //   if(task.length > 0)
  //     return alert('Debes asignar un titulo a la tarea')
  // })

  //   if()

  const handleAddTask = (event) => {
    event.preventDefault();

    if (task.length === 0) {
      setError('You must assign a title to the task')
    } else {
      // crear objeto a enviar
      const newTask = {
        id: uuidv4(),
        task: task,
        completado: false
      }
      // usar axios.post y enviar
      axios
        .post('https://joaco.getsandbox.com/todo', newTask)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    setTastk('');
  };

  return (
    <div className="App">
      <div className='container-form'>
        <Typography variant="h3" component="h2">
          Welcome to To do List
        </Typography>

        <div className='task-space'>
          {/* formulario */}
          <AddTaskForm
            handleAddTask={handleAddTask}
            task={task}
            handleTareaChange={handleTaskChange}
          />
          <FormSelect
            selected={selected}
            selectiononChange={selectiononChange}
          />
        </div>
      </div>

      <div className='message-error'>
        {
          error.length > 0
            ? <span >{error}</span>
            : null
        }

      </div>

      {/* TODO CARD */}
      <div className='second-container'>
        <Buttons
          works={works}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
