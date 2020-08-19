import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from "../../menu/Copyright";
import useStyles from "./LoginStyles";
import { useHistory } from 'react-router-dom';
import StoreContext from '../../Store/Context';
import usuarioService from "../../../Service/UsuarioService";

function initialState() {
    return { user: '', password: '' };
}

async function login({ user, password }) {
    try {
        const { dados, error} = await usuarioService.login(user, password);
        
        if (error) {
            return { error: error };
        }

        if (dados) {
            return { "dados": dados};
        }

        return { error: 'Usuário ou senha inválido' };

    } catch (error) {
        return { error: error.menssage };
    }
}

function SignInSide() {
    const classes = useStyles();
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const { setToken } = useContext(StoreContext);
    const { setUsuario } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    async function onSubmit(event) {
        event.preventDefault();

        const { dados, error } = await login(values);
        
        if (dados) {
            setToken(dados.token);
            setUsuario(usuarioService.criaUsuario(dados));
            return history.push('/');
        }

        setError(error);
        setValues(initialState);
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Entrar
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={onSubmit}>
                        <TextField variant="outlined" margin="normal"
                            required fullWidth id="user"
                            label="Login" name="user" value={values.user}
                            autoComplete="user" autoFocus onChange={onChange} />

                        <TextField variant="outlined" margin="normal"
                            required fullWidth name="password"
                            label="Senha" type="password" value={values.password}
                            id="password" autoComplete="current-password" onChange={onChange} />

                        {error && (<div className={classes.erro}>{error}</div>)}

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={onSubmit}>
                            Entrar
                        </Button>

                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default SignInSide;