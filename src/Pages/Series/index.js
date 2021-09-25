import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal';
import Grid from '../../components/Grid'
import Row from '../../components/Row';
import { instance } from '../../instance';


const Series = () => {



    return (
        <>
            
            <Row url={instance.fetchSeriesWeek} titleRow='Latest Series' />
            
            <Grid titleRow='This Week' url={instance.fetchSeries} />

            
        </>
    )
}

export default Series
