import React, { useState} from "react";
import { Box } from "@mui/system";
import { useStoreContext } from "../../utils/globalState";
import {UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import HamburgerBtn from "./HamburgerBtn";
import {Link} from "react-router-dom";
import CartBtn from "./CartBtn";
import CartMenu from "./CartMenu";



import Drawer from '@mui/material/Drawer';
import Menu from "./HamburgerMenu";
import {Button, ListItemButton, ListItemText,} from "@mui/material";



const Navbar = () => {

    const [state, setState] = React.useState({
        left: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const menu = (anchor) => {
        const handleClose = toggleDrawer(anchor, false);
        return (
            <Box
                sx={{
                    width: 400 ,
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    borderRadius: 1,
                }}
            >
                <Menu onClick={handleClose} onKeyDown={handleClose} />
            </Box>
        );
    };

    const cart = (anchor) => {
        const handleClose = toggleDrawer(anchor, false);
        return (
            <Box
                sx={{
                width: 400,
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <CartMenu onClick={handleClose} onKeyDown={handleClose} />
            </Box>

        )
    }



    return (
        <Box sx={{ backgroundColor: 'grey' }}>
            <Box sx={{display: 'grid', placeItems: 'center', p: 1 ,borderRadius: 1, }}>
                <ListItemButton component={Link} to={"/"} sx={{color:'white'}}>
                    <ListItemText primary = "pre-order your favourite items! Free shipping for orders over $150"   />
                </ListItemButton>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                borderRadius: 1
            }}>
                <HamburgerBtn  anchor="left" onClick={toggleDrawer("left", true)}>
                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}>
                        {menu("left")}
                    </Drawer>
                </HamburgerBtn>


                <CartBtn anchor="right" onClick={toggleDrawer("right", true)}>
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}>
                        {cart("right")}
                    </Drawer>
                </CartBtn>
            </Box>
        </Box>
    )
}
export default Navbar;