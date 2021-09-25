import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import {Main,Image,Overlay,Title,Rating,Content,TitleMain} from './Row2Elements'

const IMAGE = 'https://image.tmdb.org/t/p/w500'


const Row2 = ({ titleRow,url}) => {


    const [row, setRow] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data.results);
            setRow(res.data.results);
        }).catch((error) => {
            console.log(error.message);
        })    
    },[]);


    return (
        <>
            
            <TitleMain>
                {
                    titleRow
                }
                </TitleMain>
            <Main> 

                

                
                <HorizontalScroll>
                    
                    {
                        row.map((ro) => {
                            return (
                    <Content>

                    
                        <Image src={IMAGE + ro.profile_path} alt='' />
                        
                    <Overlay>
                        <Title>
                            {ro.name}
                        </Title>
                        <Rating>
                            {ro.popularity}
                        </Rating>
                                        
                        </Overlay>
                        
                    
                    </Content>
                            )
                        })
                    }
                    
                   
                    
                </HorizontalScroll>
                
            </Main>    
        </>
    )
}

export default Row2
