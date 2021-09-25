import React from 'react'
import Grid from '../../components/Grid';
import HeroSection from '../../components/HeroSection';
import Row2 from '../../components/Row2';
import { instance } from '../../instance';



const Home = () => {

    return (
        <>
            <HeroSection />
            <Grid titleRow='Trending' url={instance.fetchTrending} />

            <Row2 titleRow='Popular Celebrities' url={instance.fetchCelebrities} />
            
        </>
    )
}

export default Home
