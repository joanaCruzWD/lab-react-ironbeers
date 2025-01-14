import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

import axios from 'axios';
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';


function BeerDetailsPage() {
    const [beerDetail, setBeerDetail] = useState([]);

    const { beerId } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(`${apiURL}/${beerId}`)

            const oneBeerData = response.data;
            setBeerDetail(oneBeerData);

        }
        fetchData();
    }, [])

    return (
        <div className="col-auto">
            <Header />
            <h2> Beer Details Page </h2>
            <div className="card-beer">
                <div className="card-image-one">
                    <img src={beerDetail.image_url} alt="beer" style={{ width: '50px' }} />
                </div>
                <div className="card-info">
                    <h2>{beerDetail.name}</h2>
                    <h2>{beerDetail.tagline}</h2>
                    <h3>{beerDetail.first_brewed}</h3>
                    <h3>{beerDetail.attenuation_level}</h3>
                </div>
                <div className="card-description">
                    <h3>{beerDetail.description}</h3>
                    <h3>{beerDetail.contributed_by}</h3>
                </div>
            </div>
        </div>
    );

}

export default BeerDetailsPage;