import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        background: 'white'
    },
    media: {
        display: 'block',
        align: 'center',
        width: '60%',
        paddingTop: '56.25%',
        
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'block',
        justifyContent: 'space-between',
        align: 'center',
    },
}));