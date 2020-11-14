import React, {useState, useEffect} from 'react'
import TelaPadrao from '../../components/common/TelaPadrao';
import { Grid, Button, TextField, FormControlLabel, RadioGroup, FormLabel, Radio } from '@material-ui/core';
import useStyles from "./UsuarioStyles";
import UsuarioService from '../../Service/UsuarioService';
import DialogoAviso from '../../components/common/DialogoAviso';

export default function CadastroUsuarios({ fecharTela, usuario }) {
    const classes = useStyles();

    const [nome, setNome] = useState("");
    const [permissao, setPermissao] = useState("ADMIN");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [openDialogAviso, setOpenDialogAviso ] = useState(false);
    const [textoAviso, setTextoAviso ] = useState("");

    useEffect(() => {
        if(usuario.id !== undefined) {
            setNome(usuario.nome);
            setLogin(usuario.login);
            setEmail(usuario.email);
        }

        //Tratar o radioButton
        if(usuario.permissao === 'ADMIN') {
            setPermissao('ADMIN');
        } else {
            setPermissao('LEITURA');
        }
    }, [])

    const handleCancelar = async () => {
        fecharTela(false);
    }

    const montarUsuario = () => {
        usuario.nome = nome;
        usuario.permissao = permissao;
        usuario.login = login;
        usuario.email = email;
        if(senha) {
            usuario.senha = senha;
        }
    }

    const abrirAviso = (texto) => {
        setTextoAviso(texto);
        setOpenDialogAviso(true);
    }

    const handleSalvar = async () => {
        montarUsuario();
        console.log(usuario);
        try {         
            
            if(senha !== confirmaSenha) {
                abrirAviso("As senhas digitadas não são iguais.")
                return;
            }

            const retorno = await UsuarioService.salvarUsuario(usuario);

            if(retorno) {
                abrirAviso("Usuário Cadastrado com Sucesso.");
            } else {
                abrirAviso("Erro ao cadastrar usuario: ");
            }
        } catch (error) {
            console.log(error);
            abrirAviso(error.message);
        }
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

    const handlePermissao = (event) => {
        setPermissao(event.target.value);
    }

    const handleFechaAviso = () => {
        setOpenDialogAviso(false);
        setTextoAviso("");
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
                        <RadioGroup row aria-label="permissao" name="permissao" value={permissao} onChange={handlePermissao} >
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

            <DialogoAviso open={openDialogAviso} onClose={handleFechaAviso} handleConfirma={handleFechaAviso} texto={textoAviso}  />
        </TelaPadrao>
    )
}
