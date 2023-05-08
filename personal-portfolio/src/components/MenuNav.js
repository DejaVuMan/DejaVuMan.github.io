import * as React from 'react';
import { useNavigate } from "react-router-dom";
import IconButton  from '@mui/material/IconButton';
import MapIcon from '@mui/icons-material/Map';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@mui/material';

export default function MenuNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const styles = {
        menuNav: {
            display: "flex",
            justifyContent: "space-between",
        },
        menuNavButton: {
            alignself: "flex-end",
            marginRight: "1rem",
            marginTop: "1rem",
        },
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (path) => {
        navigate(path);
        handleClose();
      };

    return (
        <div className={"menuNav"} style={styles.menuNav}>
            <IconButton>

            </IconButton>
            <IconButton 
                id="nav-button" 
                aria-controls="nav-menu" 
                aria-haspopup="true" 
                aria-expanded={open ? 'true' : undefined} 
                onClick={handleClick}
                className={"menuNavButton"}
                style={styles.menuNavButton}
            >
                <MapIcon fontSize={"large"}/>
            </IconButton>
            <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'nav-button',
                }}
            >
                <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/about')}>About</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/projects')}>Projects</MenuItem>
                {/* <MenuItem>... skills */}
            </Menu>
        </div>
    );
}