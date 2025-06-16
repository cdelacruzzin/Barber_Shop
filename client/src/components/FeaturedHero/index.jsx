import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/system";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Radio from "@mui/material/Radio";




export default function Hero({products}) {
    const images = require.context('../../assets/featured/collection/slideshow');
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
        <Box   sx={{ position: 'relative',  width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} draggable={false}  onMouseDown={e => e.currentTarget.style.cursor = 'grabbing'} onMouseUp={e => e.currentTarget.style.cursor = 'grab'}>

            {/*EACH PHOTO WILL HAVE ITS OWN FOCUS POINT ON SMALLER SIZES*/}
            <Box
                component="img"
                src={imageUrls[imageIndex]}
                alt="slideshow"
                sx={{ height: '80vh', width: '100%',  objectFit: 'cover', objectPosition: {
                        xs: 'left top',     // focus top on phones
                        sm: 'right top',     // focus top on small tablets
                        md: 'center center',  // default center focus on larger screens
                    },
                }}
                className="featured-img"
            />
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'absolute', zIndex: 1, width: '100%', height: '80vh', overflow: 'hidden'}}>
                <Box sx={{color:'white', p:0, display: 'flex', flexDirection: 'column', height:'100%', alignItems:'center', justifyContent:'center'}}>
                    <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
                        <Typography variant="h6" sx={{color:'white', paddingX:'10%', textAlign:'center'}}>
                            pre-order your favourite items! Free
                        </Typography >
                        <Typography variant="h5" sx={{color:'white', paddingX:'10%', }}>
                            pre-order your favourite items! Free shipping for orders over $150
                        </Typography >
                        <Button component={Link} to={"/"} sx={{color:'black', p:1, border: '2px solid rgba(0,0,0,0)', backgroundColor: 'transparent', position: "relative", borderRadius: 0,
                            backgroundImage: `linear-gradient(to left, white 50%, rgba(0,0,0,0)  50%)`,  backgroundSize: "200% 100%",  backgroundPosition: "right",  transition: "background-position 0.5s ease",  '&:hover': {  backgroundPosition: "left",  color: 'white',  borderColor: 'white',  }, }}  >
                            shop the collection
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ alignSelf:'flex-end'}}>
                    <ul style={{   display: 'flex',  flexDirection: 'row',   listStyle: 'none',  width: '100%',   padding: '0 0 10%',   margin: '0 2vw',    gap: 0  }}>
                        {imageUrls.map((item, imageIndex) => (
                            <Radio sx={{color:'white','& .MuiSvgIcon-root': {
                                    fontSize: 20, // 👈 Increases the size of the radio circle
                                },
                                '&.Mui-checked': {
                                    color: 'white', // Optional: color when selected
                                },}}{...controlProps(item, imageIndex)}/>
                        ))}
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}