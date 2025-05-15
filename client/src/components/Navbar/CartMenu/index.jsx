import * as React from 'react';
import {
    List,
    ListItem,
    IconButton, TextField, Button
} from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import keychainImage from "../../../assets/anime.png";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CartMenu = ({ onClick, onKeyDown }) => {
    return (
        <Box
            sx={{
                maxWidthwidth: {
                    xs: '100%',   // very narrow on phones
                    sm: '20vw',  // wider on tablets
                    md: '300px', // fixed on desktops
                },
            backgroundColor:'yellow'
            }}
        >

    <List sx={{backgroundColor:'yellow', paddingX: { xs: '0', sm: '150vw', md: 0 }}}>

                {/* Header Row */}
                <ListItem sx={{border: '1px solid', borderColor: 'divider', borderRadius: 1.5}} secondaryAction={
                        <IconButton onClick={onClick} onKeyDown={onKeyDown} sx={{ border: '1px solid',  borderColor: 'divider', borderRadius: 1.5, }} >
                            <CancelOutlinedIcon />
                        </IconButton>
                    }
                >
                    <h3 style={{marginBottom: "0"}}>
                        Cart
                    </h3>
                </ListItem>

                <Divider />

                {/* Product Item */}
                <ListItem sx={{ px:2, gap:3}} >

                    <Box>
                        <img src={keychainImage} style={{ 'width': '10em', 'height': '10em' }} alt="" />
                    </Box>

                    <Box sx={{display: "grid",gap: 5, width: "100%" }}>
                        <Box style={{gridRow:1}}>
                            <h2 style={{marginTop: "0",marginBottom: "0"}}>

                                <a>Cart item info</a>
                            </h2>
                            <Box sx={{marginTop: "0",marginBottom: "0"}}><span>item.price</span></Box>
                        </Box>

                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{display: "flex" }}>
                                <Button sx={{minWidth: "2rem",width: "2em" }}variant = "outlined" ><RemoveOutlinedIcon/></Button>
                                <TextField   size="small"  placeholder="1" sx={{width:'2.5rem', "& .MuiInputBase-input": { py:1 }}}/>
                                <Button sx={{minWidth: "2rem", width: "2em"}} variant = "outlined"><AddIcon/></Button>
                            </Box>
                            <Box sx={{display: "flex"}}>
                                <Button sx={{minWidth: "2rem", width: "2em"}} variant="outlined"> <DeleteIcon/></Button>
                            </Box>

                        </Box>

                    </Box>
                </ListItem>



            </List>
        </Box>


    );
};
export default CartMenu