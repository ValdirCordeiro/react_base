import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import TabelaUsuarios from './TabelaUsuarios';
import UsuarioService from '../../Service/UsuarioService';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
        textAlign: 'center',
    },
}));

const handleBuscar = async () => {
    console.log("Buscar usuarios");
    await UsuarioService.buscarUsuarios();
}

export default function Usuarios() {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid  container  spacing={3} >
                    <TextField id="filled-search" label="Nome Usuário" type="search" />
                    <Button variant="contained" color="primary" onClick={handleBuscar}>Pesquisar</Button>
                </Grid>
                <br/>    <br/>    <br/>
                <Grid  container  spacing={3} >
                    <TabelaUsuarios />
                </Grid>

            </form>
        </div>
    )
}
