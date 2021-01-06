import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';



const lightGreen = green[300];
const darkGreen = green[800];


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
        
    },
    removeButton: {
        background: darkGreen,
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
        background: lightGreen,
        
    },
    checkoutButton: {
        minWidth: '150px',
        background: darkGreen
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '60%',
        justifyContent: 'space-between',
    },
    onRemoveFromCart: {
        background: darkGreen,
    },
}));