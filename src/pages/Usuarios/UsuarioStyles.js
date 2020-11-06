
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    divPesquisa: {
        display: "grid",
        gridTemplateColumns: "70% 15% 15%",
    },

    root: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
    },

    pesquisa: {
        margin: "1%",
        flexGrow: 1,
    },

    campoPesquisa: {
        flexGrow: 10,
        margin: "1%",
    },

    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },

}));

export default useStyles;