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
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let index = timer;
        const interval = setInterval(() => {
            index =  (index + 1) % imageUrls.length;
            setImageIndex(index);
        }, 5000);
        return () => clearInterval(interval); // ✅ Cleanup on unmount
    }, [timer,  imageUrls.length]);

    const handleChange = (event) => {
        setImageIndex(Number(event.target.value));
        setTimer(Number(event.target.value));
    };
    const controlProps = (item, index) => ({
        checked: imageIndex === index,
        onChange: handleChange,
        value: index,
    })



    return (
        <Box className="slideshow-container">
            <Box   sx={{ position: 'relative',  width: '100%', height: '83vh', overflow: 'hidden', border: '1px solid', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} draggable={false}  onMouseDown={e => e.currentTarget.style.cursor = 'grabbing'} onMouseUp={e => e.currentTarget.style.cursor = 'grab'}>
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
                        <Box sx={{border:'1px solid yellow', display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
                            <Typography variant="h6" sx={{color:'white', p:1, border: '2px solid black', textAlign:'center'}}>
                                pre-order your favourite items! Free
                            </Typography >
                            <Typography variant="h5" sx={{color:'white', p:1, border: '2px solid black'}}>
                                pre-order your favourite items! Free shipping for orders over $150
                            </Typography >
                            <Button component={Link} to={"/"} sx={{color:'black', p:1, border: '2px solid black', backgroundColor: 'transparent', position: "relative",
                                backgroundImage: `linear-gradient(to left, white 50%, rgba(0,0,0,0)  50%)`,  backgroundSize: "200% 100%",  backgroundPosition: "right",  transition: "background-position 0.5s ease",  '&:hover': {  backgroundPosition: "left",  color: 'white',  borderColor: 'white',  }, }}  >
                                shop the collection
                            </Button>

                        </Box>

                    </Box>
                    <Box sx={{border:'5px solid white', alignSelf:'flex-end'}}>
                        <ul style={{   display: 'flex',  flexDirection: 'row',   listStyle: 'none',  width: '100%',   padding: 0,   margin: '0 5vw',    gap: 5  }}>
                            {imageUrls.map((item, imageIndex) => (
                                    <Radio sx={{color:'white','& .MuiSvgIcon-root': {
                                            fontSize: 30, // 👈 Increases the size of the radio circle
                                        },
                                        '&.Mui-checked': {
                                            color: 'white', // Optional: color when selected
                                        },}}{...controlProps(item, imageIndex)}/>
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