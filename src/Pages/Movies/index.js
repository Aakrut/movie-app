import React from 'react'
import Grid from '../../components/Grid'
import Row from '../../components/Row'
import { instance } from '../../instance'


const Movies = () => {
    return (
        <>
            
            <Row titleRow="Now Playing" url={instance.fetchMoviesNowPlaying} />

            <Row titleRow="Trending" url={instance.fetchTrendingMovie} />

            <Grid titleRow='Latest' url={instance.fetchMovies} />
            
            
        </>
    )
}

export default Movies
