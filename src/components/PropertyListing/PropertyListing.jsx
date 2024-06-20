import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { API_PATHS } from '../../constants/api';
import fetch from 'cross-fetch';

const PropertyListing = () => {
    const [propertyListings, setPropertyListings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProperties = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(API_PATHS.PROPERTIES);

            if (res.status >= 400) {
                throw new Error('Bad response from server');
            }

            const properties = await res.json();

            setPropertyListings(properties);
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProperties();
    }, []);

    if (isLoading) {
        return <p>loading....</p>;
    }

    return (
        <ul className="PropertyListing">
            {propertyListings.length === 0 ? (
                <p>No results found</p>
            ) : (
                propertyListings.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))
            )}
        </ul>
    );
};

export default PropertyListing;
