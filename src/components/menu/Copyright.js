import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Copyright() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Valdir Cordeiro © '}
                <Link color="inherit" href="https://github.com/ValdirCordeiro">
                    GitHub
            </Link>{' '} {new Date().getFullYear()} {'.'}
            </Typography>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));