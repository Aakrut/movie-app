import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../Cards'

import {CardMain,CardContainer,Title,CardDiv} from './GridElements'



const Grid = ({ titleRow,url }) => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            
            setData(res.data.results);
        }).catch((error) => {
            console.log(error.message);
        })
    },[]);

    return (
        <>
            <CardMain>
                <CardContainer>
                    <Title>
                        {titleRow}
                    </Title>

                    <CardDiv>
                        {
                            data.map((trendings) => {
                                return (
                                    <Cards key={trendings.id} image={trendings.poster_path} title={trendings.original_title || trendings.original_name} />
                                )
                            })
                        }
                       
                    </CardDiv>
                </CardContainer>
            </CardMain>
        </>
    )
}

export default Grid
