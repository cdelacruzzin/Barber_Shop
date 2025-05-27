import React, { useState} from "react";
import {Box, maxWidth, padding} from "@mui/system";
import { useStoreContext } from "../../utils/globalState";
import {UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import HamburgerBtn from "./HamburgerBtn";
import {Link} from "react-router-dom";
import CartBtn from "./CartBtn";
import CartMenu from "./CartMenu";



import {Drawer, Grid} from '@mui/material';
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
            <Box>
                {/*sx={{width: '18vw', display: 'flex'}}*/}
                <Menu onClick={handleClose} onKeyDown={handleClose} />
            </Box>
        );
    };

    const cart = (anchor) => {
        const handleClose = toggleDrawer(anchor, false);
        return (
            <Box>
                <CartMenu onClick={handleClose} onKeyDown={handleClose} />
            </Box>

        )
    }
    return (
        <>

            <Box
                sx={{
                    backgroundColor: "black",
                    display: "grid",
                    placeItems: "center",
                    px: { xs: 2, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    color: "white",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                }}>
                <Link to={"/all-products"} style ={{textDecoration:'none', color: 'inherit'}}>
                    pre-order your favourite items! Free shipping for orders over $150
                </Link>
            </Box>


            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    backgroundColor: "black",
                    height: { xs: "8vh", sm: "10vh" },
                    // px: { xs: "2vw", sm: "4vw" },
                }}>
                <Grid>
                    <HamburgerBtn anchor="left" onClick={toggleDrawer("left", true)}>
                        <Drawer
                            anchor="left"
                            open={state["left"]}
                            onClose={toggleDrawer("left", false)}
                            PaperProps={{
                                sx: {
                                    width: { xs: "70vw", sm: "30vw", md: "17vw" },
                                },
                            }}
                        >
                            {menu("left")}
                        </Drawer>
                    </HamburgerBtn>
                </Grid>
                <Grid sx={{display: "flex", justifyContent: "center"}}>
                    <Box component={Link} to={"/"} sx={{display: 'inline-block', maxWidth: '40vw'}}>
                        <img src={logo} alt={logo} />
                    </Box>
                </Grid>

                <Grid>
                    <CartBtn anchor="right" onClick={toggleDrawer("right", true)}>
                        <Drawer
                            anchor="right"
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                            PaperProps={{
                                sx: {
                                    width: { xs: "70vw", sm: "30vw", md: "21vw" },
                                },
                            }}>
                            {cart("right")}
                        </Drawer>
                    </CartBtn>
                </Grid>

            </Grid>
        </>
    )
}
export default Navbar;