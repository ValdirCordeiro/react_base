import React, { useContext } from 'react';
import StoreContext from "../Store/Context";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import PAGINAS from "../../utils/ConstantesMenu";

export const Menu = ({ onAlterar }) => {
  const { setToken } = useContext(StoreContext);
  const { setUsuario } = useContext(StoreContext);

  const handleSair = () => {
    setToken(null);
    setUsuario(null);
  }

  return (
    <>
      <List>
        <ListItem button onClick={() => onAlterar(PAGINAS.INICIO)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Início" />
        </ListItem>

        <ListItem button onClick={() => onAlterar(PAGINAS.USUARIOS)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuários" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <div>
          <ListSubheader inset>Opções</ListSubheader>

          <ListItem button onClick={() => onAlterar(PAGINAS.CONFIGURACAO)}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Configuração" />
          </ListItem>

          <ListItem button onClick={handleSair}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </div>
      </List>
    </>
  );
}