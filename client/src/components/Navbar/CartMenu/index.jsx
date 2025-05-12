import * as React from 'react';
import {
    ListItemIcon,
    ListSubheader,
    List,
    ListItem,
    IconButton,
    ListItemButton,
    ListItemText,
    ImageListItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {Container} from "@mui/system";

import keychainImage from "../../../assets/MuyuPuzzleKeychain_240x.png";


//shop.phase-connect.com/cdn/shop/files/MuyuPuzzleKeychain_240x.png?v=1744741173"

const CartMenu = ({ onClick, onKeyDown }) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper', p: { xs: 1, sm: 2 } }}>

                {/* Header Row */}
                <ListItem
                    secondaryAction={
                        <IconButton
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                            sx={{
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1.5,
                            }}
                        >
                            <CancelOutlinedIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary="Cart" />
                </ListItem>

                <Divider />

                {/* Product Item */}
                <ListItem
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <ImageListItem
                        sx={{
                            width: { xs: '100%',  },
                            maxWidth: '100%'
                        }}
                    >
                        <Box
                            component="img"
                            src={keychainImage}
                            alt="Puzzle Keychain"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        />
                    </ImageListItem>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            width: '100%',
                        }}
                    >
                        <IconButton
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                            sx={{
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1.5,
                            }}
                        >
                            <CancelOutlinedIcon />
                        </IconButton>
                    </Box>
                </ListItem>
            </List>
        </Box>


    );
};
export default CartMenu