import React, {useState, useEffect} from 'react'
import TelaPadrao from '../../components/common/TelaPadrao';
import { Grid, Button, TextField, FormControlLabel, RadioGroup, FormLabel, Radio } from '@material-ui/core';
import useStyles from "./UsuarioStyles";

export default function CadastroUsuarios({ fecharTela, usuario }) {
    const classes = useStyles();

    const [nome, setNome] = useState("");
    const [permissao, setPermissao] = useState("ADMIN");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    useEffect(() => {
        if(usuario.id !== undefined) {
            setNome(usuario.nome);
            setLogin(usuario.login);
            setEmail(usuario.email);
        }

        //Tratar o radioButton
        //if()
    }, [])

    const handleCancelar = async () => {
        fecharTela(false);
    }

    const handleSalvar = async () => {
        console.log(usuario);
    }
    
    const handleNome = (event) => {
        setNome(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleLogin = (event) => {
        setLogin(event.target.value);
    }
    
    const handleSenha = (event) => {
        setSenha(event.target.value);
    }

    const handleConfirmaSenha = (event) => {
        setConfirmaSenha(event.target.value);
    }

    return (
        <TelaPadrao titulo="Cadastro de Usuários">
            <form noValidate autoComplete="off">

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="firstName" name="firstName" label="Nome" fullWidth value={nome} onChange={handleNome}/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormLabel component="legend">Permissão</FormLabel>
                        <RadioGroup row aria-label="permissao" name="permissao">
                            <FormControlLabel value="ADMIN" control={<Radio />} label="Administração" />
                            <FormControlLabel value="LEITURA" control={<Radio />} label="Leitura" />
                        </RadioGroup>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="login" name="login" label="Login" fullWidth value={login} onChange={handleLogin}/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="email" name="email" label="Email" fullWidth value={email} onChange={handleEmail}/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="senha" name="senha" label="Senha" fullWidth type="password" value={senha} onChange={handleSenha}/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="senha2" name="senha2" label="Confirmar Senha" fullWidth type="password" value={confirmaSenha} onChange={handleConfirmaSenha}/>
                    </Grid>
                </Grid>

                <Grid container spacing={3}  >
                    <Grid className={classes.buttons} item xs={12} sm={12}>
                        <Button className={classes.button} variant="contained" color="primary" onClick={handleSalvar}>Salvar</Button>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={handleCancelar}>Cancelar</Button>
                    </Grid>
                </Grid>
            </form>
        </TelaPadrao>
    )
}
