import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/index.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Button, IconButton, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {Box, Container} from "@mui/system";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client"
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import Radio from '@mui/material/Radio';


export default function Home() {
    const images = require.context('../assets/featured');
    const imageUrls = images.keys().map(images);

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setImageIndex((index + 1) % imageUrls.length);
        }, 5000);
        return () => clearInterval(interval); // ✅ Cleanup on unmount
    }, []);


    const handleChange = (event) => {
        setImageIndex(Number(event.target.value));
    };

    const controlProps = (index) => ({
        checked: imageIndex === index,
        onChange: handleChange,
        value: index,

    })

    return (
        <Box className="slideshow-container">
            <Box   sx={{ position: 'relative',  width: '100%', height: '84vh', overflow: 'hidden', border: '1px solid', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} draggable={false}  onMouseDown={e => e.currentTarget.style.cursor = 'grabbing'} onMouseUp={e => e.currentTarget.style.cursor = 'grab'}>
                    <img
                        src={imageUrls[imageIndex]}
                        alt="slideshow"
                        style={{
                            width: '100%',
                            objectFit: 'cover'
                        }}
                        className="featured-img"
                    />
                <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'absolute', zIndex: 1, border: '2px solid black', width: '100%', height: '84vh', overflow: 'hidden'}}>
                    <Box sx={{color:'white', p:0, border:'1px solid red', display: 'flex', flexDirection: 'column', height:'100%', alignItems:'center', justifyContent:'center'}}>
                        <Box sx={{border:'1px solid yellow'}}>
                            <Typography variant="h6" sx={{color:'white', p:1, border: '2px solid black'}}>
                                pre-order your favourite items! Free
                            </Typography >
                            <Typography variant="h5" sx={{color:'white', p:1, display: 'flex', justifyContent: 'center', border: '2px solid black'}}>
                                pre-order your favourite items! Free shipping for orders over $150
                            </Typography >
                        </Box>

                    </Box>
                    <Box sx={{border:'5px solid white', alignSelf:'flex-end'}}>
                        <ul style={{
                            display: 'flex',
                            flexDirection: 'row',
                            listStyle: 'none',
                            width: '100%',
                            padding: 0,
                            margin: '0 5vw',
                             gap: 5
                        }}>
                            {imageUrls.map((item, index) => (
                                    <Radio {...controlProps(index)}/>
                            ))}
                        </ul>
                    </Box>
                </Box>

            </Box>
            <Box sx={{display: 'flex', justifyContent:'center', border:'5px solid white'}}>
                <IconButton ><KeyboardArrowDownIcon sx={{backgroundColor: 'white', fontSize: 50,   borderRadius: 10, border: '1px solid', position:'absolute'}}/></IconButton>
            </Box>
        </Box>
    );
}