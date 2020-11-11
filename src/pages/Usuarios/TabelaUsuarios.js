import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BotaoAction from '../../components/common/BotaoAction';
import Dialogo from '../../components/common/Dialogo';

const useStyles = makeStyles({
  table: {
    //minWidth: 650,
  },
});

export default function TabelaUsuarios({ usuarios, isEditar, isDeletar }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [usuarioDeletar, setUsuarioDeletar] = useState({});
  const classes = useStyles();

  const handleEditar = (usuario) => {
    isEditar(usuario);
  }

  const handleDeletar = (usuario) => {
    setOpenDialog(true);
    console.log(openDialog);
    setUsuarioDeletar(usuario);
  }

  const handleConfirma = () => {
    setOpenDialog(false);
    isDeletar(usuarioDeletar);
  };

  const handleCancela = () => {
    setOpenDialog(false);
    setUsuarioDeletar({});
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Login</TableCell>
              <TableCell align="center">Permissão</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { usuarios === [] && ( <label>Nehum registro encontrado</label>)}
            {usuarios &&
              (
                usuarios.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.nome}
                    </TableCell>
                    <TableCell align="center">{user.login}</TableCell>
                    <TableCell align="center">{user.permissao}</TableCell>
                    <TableCell align="center">{user.createdAt}</TableCell>
                    <TableCell align="center" style={css.botoes} >
                      <BotaoAction acao={"edit"}  onActionClick={handleEditar} objeto={user}/>
                      <BotaoAction acao={"delete"} onActionClick={handleDeletar}  objeto={user}/>
                    </TableCell>
                  </TableRow>
                ))

              )
            }
          </TableBody>
        </Table>
      </TableContainer>

      <Dialogo open={openDialog}  onClose={handleCancela} setOpenDialog={setOpenDialog}
               handleConfirma={handleConfirma} handleCancela={handleCancela}
               texto="Deseja excluir o usuário?" ></Dialogo>
     </>
  );
}

const css = {
  botoes: {
    display: "flex",
    flex: "7 1 0%",
    flexDirection: "row",
    alignItems: "center",
  },
}    