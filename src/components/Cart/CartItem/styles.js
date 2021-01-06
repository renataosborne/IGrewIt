import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const darkGreen = green[800];

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        
    },
    
    
}));