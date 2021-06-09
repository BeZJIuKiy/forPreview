// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
//
// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));
//
// export const Notifications = () => {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//
//     const handleClick = () => {
//         setOpen(true);
//     };
//
//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//
//         setOpen(false);
//     };
//
//     return (
//         <div className={classes.root}>
//             <Button variant="outlined" onClick={handleClick}>
//                 Open success snackbar
//             </Button>
//             {/*<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>*/}
//             <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="success">
//                     This is a success message!
//                 </Alert>
//             </Snackbar>
//             <Alert severity="error">This is an error message!</Alert>
//             <Alert severity="warning">This is a warning message!</Alert>
//             <Alert severity="info">This is an information message!</Alert>
//             <Alert severity="success">This is a success message!</Alert>
//         </div>
//     );
// }


import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#f44336"+'!important',
        fontSize: 16,
        color: "gold"+'!important',
    }
});

const styles = {
    root: {
        background: 'red'
    }
};

export const Notifications = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClick}>Open simple snackbar</Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                ContentProps={{
                    classes: {
                        root: classes.root
                    }
                }}
                open={open}
                // autoHideDuration={60000}
                autoHideDuration={null}
                onClose={handleClose}
                // message="Note archived"

                message={
                    <span id="message-id">
                        <div>
                            <h3 style={{textAlign: "center"}}>Title</h3>
                            <div>Hi there! Some message.</div>
                        </div>
                    </span>
                }


                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import { SnackbarProvider, useSnackbar } from 'notistack';
//
// function MyApp() {
//     const { enqueueSnackbar } = useSnackbar();
//
//     const handleClick = () => {
//         enqueueSnackbar('I love snacks.');
//     };
//
//     const handleClickVariant = (variant) => () => {
//         // variant could be success, error, warning, info, or default
//         enqueueSnackbar('This is a success message!', { variant });
//     };
//
//     return (
//         <React.Fragment>
//             <Button onClick={handleClick}>Show snackbar</Button>
//             <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
//         </React.Fragment>
//     );
// }
//
// export const Notifications = () => {
//     return (
//         <SnackbarProvider maxSnack={3}>
//             <MyApp />
//         </SnackbarProvider>
//     );
// }