import axios from 'axios'
    
export const deleteTask = (id) => {
  axios
    .delete('https://joaco.getsandbox.com/todo/' + id)
    .then(res => console.log(res))
    .catch(error => console.log(error))
} 