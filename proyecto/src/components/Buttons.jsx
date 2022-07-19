import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';

export const Buttons = ({ works, isEditable, setIsEditable, deleteTask }) => {
  return (
    <div>
      {
        works.map(element => {
          return (
            <div className='todoCard' key={element.id}>
              {/* input */}
              <div>
                <TextField disabled={!(isEditable === element.id)} type='text' defaultValue={element.task} />
              </div>

              <div className='todoCard-buttons'>
                {isEditable === element.id
                  ? <IconButton arial-label="check" >
                    <SendIcon fontSize="small" />
                  </IconButton>
                  : <>
                    <div className='todoCard-button-check' >
                      <IconButton arial-label="check">
                        <CheckIcon fontSize="small" sx={{ color: grey[50] }} />
                      </IconButton>
                    </div>

                    <div className='todoCard-button-delete' >
                      <IconButton onClick={() => deleteTask(element.id)}>
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
  )
}