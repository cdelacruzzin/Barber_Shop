import React, { useState} from "react";
import {Box, maxWidth, padding} from "@mui/system";
import { useStoreContext } from "../../utils/globalState";
import {UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import HamburgerBtn from "./HamburgerBtn";
import {Link} from "react-router-dom";
import CartBtn from "./CartBtn";
import CartMenu from "./CartMenu";



import Drawer from '@mui/material/Drawer';
import Menu from "./HamburgerMenu";
import {Button, ListItemButton, ListItemText,} from "@mui/material";
import logo from "../../assets/logo.png";


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
                    backgroundColor:'yellow'
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
                width: '400',
                display: 'flex',
                justifyContent: 'space-between',
                    backgroundColor:'yellow'
            }}>
                <CartMenu onClick={handleClose} onKeyDown={handleClose} />
            </Box>

        )
    }
    return (
        <>

            <Box
                sx={{  backgroundColor: 'black', display: 'grid',  placeItems: 'center',  px: 2, color:'white', py: 1 }} >
                <Link to={"/all-products"} style ={{textDecoration:'none', color: 'inherit'}}>
                    pre-order your favourite items! Free shipping for orders over $150
                </Link>
                {/*<ListItemButton component={Link} to="/collections/all">*/}
                {/*    <ListItemText*/}
                {/*        primary="pre-order your favourite items! Free shipping for orders over $150"*/}
                {/*        sx={{ color: 'white', p: 0 }}*/}
                {/*    />*/}
                {/*</ListItemButton>*/}
            </Box>


            <Box sx={{    position: 'sticky',
                top: 0,
                zIndex: 2,
                backgroundColor: 'black',
                height: '8vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 0,
            }}>
                <HamburgerBtn anchor="left" onClick={toggleDrawer("left", true)}>
                    <Drawer  anchor={"left"}  open={state["left"]} onClose={toggleDrawer("left", false)}>
                        {menu("left")}
                    </Drawer>
                </HamburgerBtn>
                <Box component={Link} to={"/"}>
                    <img src={logo} alt={logo} />
                </Box>
                <CartBtn anchor="right" onClick={toggleDrawer("right", true)}>
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}>
                        {cart("right")}
                    </Drawer>
                </CartBtn>
            </Box>
        </>
    )
}
export default Navbar;