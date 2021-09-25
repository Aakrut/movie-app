import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import {Main,Image,Overlay,Title,Rating,Content,TitleMain,Language} from './RowElements'

const IMAGE = 'https://image.tmdb.org/t/p/w500'


const Row = ({ titleRow,url}) => {


    const [row, setRow] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            setRow(res.data.results);
        }).catch((error) => {
            console.log(error.message);
        })    
    }, []);


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

                    
                        <Image src={IMAGE + ro.poster_path} alt='' />
                        
                    <Overlay>
                        <Title>
                            {ro.original_title || ro.original_name}
                        </Title>
                        <Rating>
                            {ro.vote_average}
                        </Rating>
                                        
                        <Language>
                            {
                               ro.original_language
                            }
                        </Language>
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

export default Row
