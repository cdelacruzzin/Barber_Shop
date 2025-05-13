import * as React from 'react';
import {
    ListItemIcon,
    ListSubheader,
    List,
    ListItem,
    IconButton,
    ListItemButton,
    ListItemText,
    ImageListItem, TextField, Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {Container} from "@mui/system";

import keychainImage from "../../../assets/anime.png";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


//shop.phase-connect.com/cdn/shop/files/anime.png?v=1744741173"

const CartMenu = ({ onClick, onKeyDown }) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', border: '2px solid', borderColor: 'divider', borderRadius: 1.5 }}>
            <List sx={{ bgcolor: 'background.paper', p: { xs: 1, sm: 2, md: 0 }, border: '1px solid', borderColor: 'divider', borderRadius: 1.5 }}>

                {/* Header Row */}
                <ListItem sx={{border: '1px solid', borderColor: 'divider', borderRadius: 1.5}} secondaryAction={
                        <IconButton onClick={onClick} onKeyDown={onKeyDown} sx={{ border: '1px solid',  borderColor: 'red', borderRadius: 1.5, }} >
                            <CancelOutlinedIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary="Cart" />
                </ListItem>

                <Divider />

                {/* Product Item */}
                <ListItem sx={{ px:1, gap:3, border: '2px solid', borderColor: 'red', borderRadius: 1.5, backgroundColor: "yellow" }} >

                    <Box sx={{ border: '2px solid', borderColor: 'divider', borderRadius: 1.5, }}>
                        <img src={keychainImage} style={{ 'width': '10em', 'height': '10em' }} alt="" />
                    </Box>

                    <Box sx={{display: "grid",gap: 5, border: '1px solid', borderColor: 'divider', borderRadius: 1.5, width: "100%" }}>
                        <Box style={{gridRow:1, border: '1px solid',  borderColor: 'red', borderRadius: 1.5}}>
                            <h2 style={{marginTop: "0",marginBottom: "0", border: '1px solid',  borderColor: 'red', borderRadius: 1.5}}>

                                <a>Cart item info</a>
                            </h2>
                            <Box sx={{marginTop: "0",marginBottom: "0", border: '1px solid',  borderColor: 'red', borderRadius: 1.5}}><span>item.price</span></Box>
                        </Box>

                        <Box sx={{display: "flex", justifyContent: "space-between", border: '1px solid', borderColor: 'divider', borderRadius: 1.5}}>
                            <Box sx={{border: '1px solid', borderColor: 'divider', borderRadius: 1.5}}>

                                <Button sx={{minWidth: "2rem",width: "2em", border: '1px solid',  borderColor: 'red', borderRadius: 1.5, }} variant = "outlined"><RemoveOutlinedIcon/></Button>
                                <TextField   size="small"  placeholder="1" sx={{width:'2.5rem', "& .MuiInputBase-input": { py:1 }}}/>
                                <Button sx={{minWidth: "2rem", width: "2em", border: '1px solid',  borderColor: 'red', borderRadius: 1.5, }} variant = "outlined"><AddIcon/></Button>
                            </Box>
                            <Button sx={{minWidth: "2rem", width: "2em", border: '1px solid',  borderColor: 'red', borderRadius: 1.5,display: "flex",  alignItems: "center", justifyContent: "center" }} variant="outlined"> <DeleteIcon/></Button>
                        </Box>

                    </Box>
                </ListItem>



            </List>
        </Box>


    );
};
export default CartMenu