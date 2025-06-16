import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box} from "@mui/system";
import Flickity from 'flickity';
import carousel from '../../styles/FeaturedCollections.css'
import {Button, Grid, Paper, Tab, Tabs, Typography} from '@mui/material';
import products from "../../assets/featured/collection/coffee";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import MultiCarousel from "./MultiCarousel";

const tabs = [
    {
        label: 'Phase Connect - Custom Roast Coffee',
        id: 'block-3756859a-1f88-466a-8bc1-e03fbd131e65',
    },
    {
        label: 'Alternative Outfit Standee',
        id: 'block-5b147a49-395f-4fbb-8c76-d13bab04552b',
    },
];

export default function FeaturedCollection(props) {

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);

    };

    const [index, setIndex] = useState(0);
    const totalProducts = Object.entries(products).length;


    return (
        <>
            <section id="section">
                <header style={{ textAlign: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                    <h5>Featured Collection</h5>
                    <div className="SectionHeader__TabList TabList" role="tablist">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`Heading U-h1 TabList__Item ${tab === activeTab ? 'is-active' : ''}`}
                                data-action="toggle-tab"
                                role="tab"
                                aria-selected={tab === activeTab}
                                aria-controls={tab}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </header>
                <div style={{gridTemplateColumns: 'auto'}}>


                    <MultiCarousel products={products} activeTab={activeTab} />

                    <div className= "Container" style={{paddingTop: '5%', paddingBottom: '5%'}} >
                        <div className="SectionFooter" style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href={`'collections/${activeTab.label}`}>
                                <Button sx={{color:'white', p:1, border: '2px solid rgba(0,0,0,0)', backgroundColor: 'transparent', position: "relative", borderRadius: 0,
                                    backgroundImage: `linear-gradient(to left, black 50%, rgba(0,0,0,0)  50%)`,  backgroundSize: "200% 100%",  backgroundPosition: "right",  transition: "background-position 0.5s ease",  '&:hover': {  backgroundPosition: "left",  color: 'black',  borderColor: 'black',  }, }}>view all products</Button>
                            </a>
                        </div>




                    </div>
                </div>
            </section>
        </>
    );
}