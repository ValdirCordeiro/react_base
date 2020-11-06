import React, { useContext } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu } from '../../components/menu/MenuAdmin';
import useStyles from "./HomeStyles";
import Copyright from "../../components/menu/Copyright";
import Inicio from './Inicio';
import PAGINAS from "../../utils/ConstantesMenu";
import Usuarios from '../Usuarios/Usuarios';
import Configuracoes from '../Conf/Configuracoes';
import { Tooltip } from '@material-ui/core';
import StoreContext from '../../components/Store/Context';

export default function Home() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [pagina, setPagina] = React.useState(PAGINAS.INICIO);

    const { usuario } = useContext(StoreContext);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleAlterarPagina = (novaPagina) => {
        setPagina(novaPagina);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" color="inherit"
                        aria-label="open drawer" onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Sistema Gerencial
                    </Typography>

                    <Tooltip title="Editar meu usuário">
                        <IconButton color="inherit" onClick={() => handleAlterarPagina(PAGINAS.INICIO)}>
                            <AccountCircle /> <span style={{ fontSize: "1rem", margin: "5px" }}>{usuario.nome}</span>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}
                classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }} >

                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Menu onAlterar={handleAlterarPagina} />
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container >
                        {pagina === PAGINAS.INICIO && (<Inicio />)}
                        {pagina === PAGINAS.USUARIOS && (<Usuarios />)}
                        {pagina === PAGINAS.CONFIGURACAO && (<Configuracoes />)}
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}