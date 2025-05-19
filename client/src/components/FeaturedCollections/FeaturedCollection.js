import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box} from "@mui/system";
import Flickity from 'flickity';
import carousel from '../../styles/FeaturedCollections.css'


export default function FeaturedCollection(props) {
    // const coffeeProduct = require.context('../assets/featured/collection/coffee');
    // const coffeeProductURLs = coffeeProduct.keys().map(coffeeProduct);

    return (
        <div style={{}}>
            <section id='section'>
                <header style={{height:'10vh', backgroundColor: 'white'}}>
                    header
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