import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/index.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Button, IconButton} from "@mui/material";
import {Box} from "@mui/system";


export default function Home() {
    const images = require.context('../assets/featured', false, /\.(png|jpe?g)$/);
    const imageUrls = images.keys().map(images);

    return (
        <Box className="slideshow-container">
            <Box   sx={{
                position: 'relative',
                width: '100%',
                height: '81.5vh',
                overflow: 'hidden',
            }}>
                {imageUrls.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Featured ${index}`}
                        className="slideshow-image"
                        style={{ animationDelay: `${index * 5}s` }} // Adjust delay per image
                    />
                ))}
            </Box>
            <Box sx={{display: 'flex', justifyContent:'center'}}>
                <IconButton ><KeyboardArrowDownIcon sx={{backgroundColor: 'white', fontSize: 50,   borderRadius: 10, borderBlockColor: 'red', border: '1px solid', position:'absolute'}}/></IconButton>
            </Box>
        </Box>
    );
}