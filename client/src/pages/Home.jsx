import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/index.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Button, IconButton, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {Box, Container} from "@mui/system";
import { useEffect, useState } from "react";


export default function Home() {
    const images = require.context('../assets/featured', false, /\.(png|jpe?g)$/);
    const imageUrls = images.keys().map(images);

    const [image, setImage] = useState(imageUrls[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % imageUrls.length;
            setImage(imageUrls[index]);
        }, 5000);
        return () => clearInterval(interval);
    }, [image]);


    return (
        <Box className="slideshow-container">
            <Box   sx={{ position: 'relative',  width: '100%', height: '85vh', overflow: 'hidden', border: '1px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={image}
                        alt="slideshow"
                        style={{
                            width: '100%',
                            maxHeight: '85vh',
                            objectFit: 'cover',
                            cursor: 'grab',
                        }}
                        className="featured-img"
                        draggable={false}
                        onMouseDown={e => e.currentTarget.style.cursor = 'grabbing'}
                        onMouseUp={e => e.currentTarget.style.cursor = 'grab'}
                    />
                <Box sx={{display: 'flex', flexDirection: 'column', position: 'absolute', zIndex: 1, border: '2px solid red'}}>
                    <ListItem sx={{color:'white', p:0, border:'1px solid red', display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h6" sx={{color:'white', p:1, textAlign:'center'}}>
                            pre-order your favourite items! Free
                        </Typography >
                    </ListItem>
                    <ListItem sx={{color:'white', p:0}}>
                        <Typography variant="h5" sx={{color:'white', p:1, display: 'flex', justifyContent: 'center'}}>
                            pre-order your favourite items! Free shipping for orders over $150
                        </Typography >
                    </ListItem>
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent:'center'}}>
                <IconButton ><KeyboardArrowDownIcon sx={{backgroundColor: 'white', fontSize: 50,   borderRadius: 10, border: '1px solid', position:'absolute'}}/></IconButton>
            </Box>
        </Box>
    );
}