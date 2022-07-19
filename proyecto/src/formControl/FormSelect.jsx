import { MenuItem, FormControl, InputLabel, Select} from '@mui/material';

export const FormSelect = ({selected, selectiononChange}) =>{
return(
  <div >
  <FormControl>
    <InputLabel>Task Type</InputLabel>
    <Select value={selected} onChange={selectiononChange} style={{width:'170px', backgroundColor: 'white' }}  >
      <MenuItem value={1}>All tasks</MenuItem>
      <MenuItem value={2}>Pending tasks</MenuItem>
      <MenuItem value={3}>Completed tasks</MenuItem>
    </Select>
  </FormControl>
  </div>
)
}