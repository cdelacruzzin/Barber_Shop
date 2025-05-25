import * as React from 'react';
import {
    ListItemIcon,
    ListSubheader,
    List,
    ListItem,
    IconButton,
    ListItemButton,
    ListItemText,
    Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ onClick, onKeyDown }) => {
        const menus = [
            { title: "home", link: '/' },
            { title: "all products", link: '/all-products' },
            { title: "collections", link: '/pages/collections' },
            { title: "contact", link: '/pages/contact-us' },
            { title: "faq", link: '/pages/faq' },
        ]

    return (
        <Box sx={{width: '100%', }}>
            <IconButton onClick={onClick} onKeyDown={onKeyDown} button sx={{scale:'1.25' , m:1}}>
                <CloseIcon />
            </IconButton>
        <List >
            {menus.map((item, index) => (
                <>
                    <ListItem key={index} sx={{px:0, py:0 }}>
                        <ListItemButton component={Link} to={item.link} sx={{borderBottom: '1px solid', borderColor: 'divider',py:2, mx:2.5}}>
                            <ListItemIcon>{item.title}</ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                </>
            ))}
        </List>

        </Box>
    );
};

export default Menu;
