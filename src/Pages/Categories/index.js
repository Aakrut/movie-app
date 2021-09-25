import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'
import { instance } from '../../instance'
import { CategoryMain, Button, CategoryContainer, CardDiv, CardsContainer, Image, IMAGE, OverLay, Title,LI } from './CategoriesElements'
import {fetchMovieGenre} from '../../instance';


const Categories = () => {

    const [genres, setGenres] = useState([]);
    const [ moviesbGenre, setMoviesBgenre ] = useState([]);

    useEffect(() => {
        axios.get(instance.fetchGenere).then((res) => {
            setGenres(res.data.genres);
            
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);
    
    useEffect(() => {
        const fetch = async () => {
            setMoviesBgenre(await fetchMovieGenre(12));
        }
        fetch();
    }, []);

    const handleClick = async(genre_id) => {
        setMoviesBgenre(await fetchMovieGenre(genre_id));
    }


    return (
        <>
            <CategoryMain >
                <HorizontalScroll>
                    {
                    genres.map((genre) => {
                        return (

                    <LI key={genre.id}>
                    <Button onClick={()=> handleClick(genre.id)}>
                        { genre.name}
                            </Button>
                            </LI>
                        )
                    })
                    }
                </HorizontalScroll>
           </CategoryMain>

            <CategoryContainer>
                <CardDiv>
                    

                    {
                        moviesbGenre.map((item) => {
                            return (
                                <CardsContainer>
                        
                                    <Link to={`/movie/${item.id}`} key={item.id}>
                            
                        
                <Image src={item.poster} alt='image' />

                <OverLay>
                    <Title>
                        {
                        item.title
                        }
                    </Title>
                </OverLay>
                </Link>
            </CardsContainer>
                       
                            )
                        })
                    }
                   
                    </CardDiv>
            </CategoryContainer>
        </>
    )
}

export default Categories
