import React from 'react';
import { Dialog, Button } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function DialogoAviso({open, handleConfirma, texto}) {
    
    const handleConfirmar = () => {
        handleConfirma();
    };
    
    return (
        <Dialog open={open}  onClose={handleConfirmar}  >
        <DialogContent>
          <DialogContentText style={css.dialogo}>
            {texto}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmar} variant="contained" color="primary" autoFocus> OK </Button>
        </DialogActions>
      </Dialog>
    )
}

const css = {  
    dialogo: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    }  
  }
