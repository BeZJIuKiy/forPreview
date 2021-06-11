import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		backgroundColor: "#f44336" + '!important',
		fontSize: 16,
		padding: "0 60px 10px"
		// color: "white"+'!important',
	},

	message: {
		color: "white",
		fontWeight: 700,
		fontSize: 16,

		position: "relative",
	},

	message__title: {
		fontSize: 18,
		textAlign: "center",
	},

	icon__pos: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 1,

		display: "block",
	}
});

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

				message={
					<span id="message-id">
                        <div className={classes.message}>
                            <h3 className={classes.message__title}>
                                {/*{"Ship 01 / Engine 02"}*/}
	                            {"АСНКВ"}
                            </h3>
	                        {/*<div className={classes.message}>{"Attention! Exceeding the emission of ammonia!"}</div>*/}
	                        <div>{"Внимание! Превышение по выбросу серы!"}</div>
                        </div>

						<div style={{
							display: "flex",
							justifyContent: "space-between",
							color: "white",
							paddingTop: 10,
						}}>
							{/*<div>Time: 12:06</div>*/}
							{/*<div>Date: 31.05.2019</div>*/}

							<div>Время: 12:06</div>
							<div>Дата: 31.05.2019</div>
						</div>

	                    <div style={{display: "flex", justifyContent: "space-around"}}>
		                    <Button color="primary" size="large" onClick={handleClose}
		                            style={{
			                            width: "50%",
			                            fontSize: 14,
			                            background: "#ddd",
			                            marginTop: 20,
			                            color: "#333"
		                            }}
		                    >
		                        {/*recommendations*/}
			                    рекомендации
		                    </Button>
	                    </div>

						<div className={classes.icon__pos}>
							<IconButton size="large" aria-label="close" color="inherit" onClick={handleClose}>
				 			    <CloseIcon fontSize="large" style={{color: "#333"}}/>
					        </IconButton>
						</div>

                    </span>
				}


				// action={
				// 	<React.Fragment>
				// 		{/*<Button color="secondary" size="small" onClick={handleClose}>*/}
				// 		{/*    UNDO*/}
				// 		{/*</Button>*/}
				// 		<IconButton size="large" aria-label="close" color="inherit" onClick={handleClose}>
				// 			<CloseIcon fontSize="large" style={{color: "#333"}}/>
				// 		</IconButton>
				// 	</React.Fragment>
				// }
			/>
		</div>
	);
}