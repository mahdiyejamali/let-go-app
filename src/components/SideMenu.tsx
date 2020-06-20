import React, { useState } from 'react';
import { useHistory } from 'react-router';

// Components
import { makeStyles } from '@material-ui/core/styles';
import {
	IconButton,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const SideMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const history = useHistory();
	const classes = useStyles();

	const toggleSideMenu = () => {
		setIsOpen(!isOpen);
	};

	const openCreatePage = () => {
		toggleSideMenu();
		history.push('/products/create');
	};

	const fullList = (
		<List>
			<ListItem button key="create" onClick={openCreatePage}>
				<ListItemIcon>
					<AddIcon />
				</ListItemIcon>
				<ListItemText primary="Create Product" />
			</ListItem>
		</List>
	);

	return (
		<>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
				onClick={toggleSideMenu}
			>
				<MenuIcon />
			</IconButton>
			<SwipeableDrawer anchor="left" open={isOpen} onClose={toggleSideMenu} onOpen={toggleSideMenu}>
				{fullList}
			</SwipeableDrawer>
		</>
	);
};

export default SideMenu;
