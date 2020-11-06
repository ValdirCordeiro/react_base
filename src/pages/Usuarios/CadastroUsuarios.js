import React from 'react'
import TelaPadrao from '../../components/common/TelaPadrao';
import { Grid, Button, TextField, FormControlLabel, RadioGroup, FormLabel, Radio } from '@material-ui/core';
import useStyles from "./UsuarioStyles";

export default function CadastroUsuarios({ fecharTela }) {
    const classes = useStyles();

    const handleCancelar = async () => {
        console.log("Cancelar");
        fecharTela(false);
    }

    const handleSalvar = async () => {
        console.log("Salvar");
    }

    return (
        <TelaPadrao titulo="Cadastro de Usuários">
            <form noValidate autoComplete="off">

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="firstName" name="firstName" label="Nome" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormLabel component="legend">Permissão</FormLabel>
                        <RadioGroup row aria-label="permissao" name="permissao">
                            <FormControlLabel value="ADMIN" control={<Radio />} label="Administração" />
                            <FormControlLabel value="LEITURA" control={<Radio />} label="Leitura" />
                        </RadioGroup>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="login" name="login" label="Login" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="email" name="email" label="Email" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="senha" name="senha" label="Senha" fullWidth type="password"/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id="senha2" name="senha2" label="Confirmar Senha" fullWidth type="password" />
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
