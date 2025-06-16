import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/index.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Button, IconButton, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {Box, Container} from "@mui/system";
import { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import FeaturedCollection from "../components/FeaturedCollections/FeaturedCollection";
import { useRef } from "react";

import Hero from "../components/FeaturedHero";


export default function Home() {

    const featuredRef = useRef(null);
    const handleScroll = () => {
        featuredRef.current.scrollIntoView({
            behavior: 'smooth',
        })
    }


    return (
        <>
            <Hero/>
                <Box sx={{display: 'flex', justifyContent:'center', }}>
                    <IconButton  ><KeyboardArrowDownIcon onClick={handleScroll} sx={{backgroundColor: 'white', fontSize: 50,   borderRadius: 10, border: '1px solid', position:'absolute'}}/></IconButton>
                </Box>
            <Box ref={featuredRef} >
                <FeaturedCollection />
            </Box>

        </>
    );
}