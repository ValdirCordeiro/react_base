import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip } from '@material-ui/core';

export default function BotaoAction({acao, objeto, onActionClick}) {

    const handleClick = () => {
        console.log(objeto);
        onActionClick(objeto);
    }

    return (
        <div>
            {acao === 'edit' && 
            (<Tooltip title="Editar Usuário">
                <EditIcon color="primary" style={css.botoes} onClick={handleClick}  />
            </Tooltip>)}
           
            {acao === 'delete' && 
            (<Tooltip title="Deletar Usuário">
                <DeleteIcon color="error" style={css.botoes} onClick={handleClick} />
             </Tooltip>)}  
        </div>
    )
}

const css = {
    botoes: {
        cursor: "pointer",
        marginRight: "10px"
    }
}
