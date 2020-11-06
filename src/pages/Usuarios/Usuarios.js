import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import TabelaUsuarios from './TabelaUsuarios';
import UsuarioService from '../../Service/UsuarioService';
import TelaPadrao from '../../components/common/TelaPadrao';
import useStyles from "./UsuarioStyles";
import CadastroUsuarios from './CadastroUsuarios';


export default function Usuarios() {
    const classes = useStyles();
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [isCadastro, setIsCadastro] = useState(false);
    const [nome, setNome] = useState("");


    useEffect(() => {
        UsuarioService.buscarUsuarios().then((dados) => {
            setUsuarios(dados);
            setCarregando(false);
        });
    }, []);

    const handleBuscar = async () => {
        console.log("Buscar usuarios");
        setCarregando(true);
        console.log(nome);
        const todosUsuarios = await UsuarioService.buscarUsuarios(nome);

        setUsuarios(todosUsuarios);        
        setCarregando(false);
    }

    const handleNovoUsuario = async () => {
        setIsCadastro(true);
    }

    const handleNome = (event) => {
        setNome(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleBuscar();
    }


    return (
        <>
            {!isCadastro && (
                <TelaPadrao titulo="Usuários">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                        <Grid container className={classes.root} >
                            <TextField className={classes.campoPesquisa} id="filled-search" label="Nome Usuário" type="search" value={nome} onChange={handleNome} />
                            <Button className={classes.pesquisa} variant="contained" color="primary" onClick={handleBuscar}>Pesquisar</Button>
                            <Button className={classes.pesquisa} variant="contained" color="primary" onClick={handleNovoUsuario}>Novo +</Button>
                        </Grid>

                        <Grid container >
                            {carregando && (<span>Carregando</span>)}
                            {!carregando && (<TabelaUsuarios usuarios={usuarios} />)}
                        </Grid>
                    </form>
                </TelaPadrao>)}

            {isCadastro && (<CadastroUsuarios fecharTela={ (valor) => setIsCadastro(valor)}/>)}
        </>
    )
}
