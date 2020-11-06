import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    //minWidth: 650,
  },
});

export default function TabelaUsuarios({ usuarios }) {
  const classes = useStyles();

  return (
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
                  <TableCell align="center">
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </TableCell>
                </TableRow>
              ))

            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}