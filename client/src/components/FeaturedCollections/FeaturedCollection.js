import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box} from "@mui/system";
import Flickity from 'flickity';
import carousel from '../../styles/FeaturedCollections.css'
import {Tab, Tabs, Typography} from '@mui/material';


export default function FeaturedCollection(props) {
    // const coffeeProduct = require.context('../assets/featured/collection/coffee');
    // const coffeeProductURLs = coffeeProduct.keys().map(coffeeProduct);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return (
        <div style={{}}>
            <section id='section'>
                <header style={{height:'100%', display:'flex',flexDirection:'column', justifyContent:'center', marginTop: 4, backgroundColor:'white' }}>
                    <h5 style ={{paddingTop: '2%', textAlign:'center'}}> Featured Collection</h5>
                    {/*<Tabs value={activeTab} onchange={changeTab}>*/}
                    {/*    <Tab label={"coffee"}/>*/}
                    {/*    <Tab label={"standee"}/>*/}
                    {/*</Tabs>*/}
                    <Box sx={{ width: '100%', backgroundColor: 'yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center' }}>
                        {/*<div style={{backgroundColor:'red', height:'100%',display:'flex', justifyContent:'center', alignItems: 'center'}}>*/}
                        {/*    <Typography sx={{px:5}}>Custom Roast Coffee</Typography>*/}
                        {/*    <Typography sx={{px:5}}>Custom Roast Coffee</Typography>*/}
                        {/*</div>*/}
                        <Tabs root={{}} value={value} onChange={handleChange} centered>
                            <Tab label="Custom Roeast Coffee" />
                            <Tab label="alternative outfit standee" />
                        </Tabs>
                    </Box>



                </header>
                <div role={"tab panel"}>
                    <div className={"ProductListWrapper"}>
                        <div className={"ProductList carousel flickity-enabled is-draggable"}>
                            <div className="carousel-cell">1</div>
                            <div className="carousel-cell">2</div>
                            <div className="carousel-cell">3</div>
                            <div className="carousel-cell">4</div>
                            <div className="carousel-cell">5</div>
                        </div>
                    </div>
                    <div className={"Container"}></div>
                </div>
            </section>
        </div>
    );
}