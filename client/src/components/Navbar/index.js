import React, { useState} from "react";
import { Box } from "@mui/system";
import { useStoreContext } from "../../utils/globalState";
import {UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import HamburgerBtn from "./HamburgerBtn";


import Drawer from '@mui/material/Drawer';
import Menu from "./HamburgerMenu";


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
                    width: anchor === 'left' || anchor === 'right' ? 340 : 'auto',
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



    return (
        <header>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                borderRadius: 1,
            }}>
                <HamburgerBtn anchor="left" onClick={toggleDrawer("left", true)}>
                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}>
                        {menu("left")}
                    </Drawer>

                </HamburgerBtn>




            </Box>
        </header >
    )
}
export default Navbar;