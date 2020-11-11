import React from 'react';
import { Dialog, Button } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function Dialogo({open, handleCancela, handleConfirma, texto}) {
    
    const handleConfirmar = () => {
        handleConfirma();
    };
    
    const handleCancelar = () => {
        handleCancela();
    };

    return (
        <Dialog open={open}  onClose={handleCancelar}  >
        <DialogContent>
          <DialogContentText style={css.dialogo}>
            {texto}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmar} variant="contained" color="secondary"> EXCLUIR </Button>
          <Button onClick={handleCancelar} variant="contained" color="primary" autoFocus> CANCELAR </Button>
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
