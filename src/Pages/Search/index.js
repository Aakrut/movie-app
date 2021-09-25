import axios from 'axios';
import React, { useState } from 'react'
import Grid from '../../components/Grid';
import { instance } from '../../instance';
import { SearchContainer, Form, Input, CardMain, CardContainer, Title, CardDiv } from './SearchElements'
import Cards from '../../components/Cards';


const Search = () => {

    const [search, setSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchItem = (e) => {
        e.preventDefault();
        axios.get(instance.fetchSearchMS + searchTerm).then((res) => {
            setSearch(res.data.results);
        }).catch((error) => {
            console.log(error);
        })
        
    }
    

    return (
        <>
            <SearchContainer>
                <Form onSubmit={searchItem}>
                    
                    <Input value={searchTerm}text='text' placeholder="Search Here..." onChange={(e)=> setSearchTerm(e.target.value)}>
                        
                    </Input>
                    </Form>
            </SearchContainer>

            {
                searchTerm ?
                <CardMain>
                <CardContainer>
                    <Title>
                        Yoour Results
                    </Title>

                    <CardDiv>
                        {
                        
                            search.map((searched) => {
                                return (
                                    <Cards key={searched.id} image={searched.poster_path || searched.backdrop_path} title={searched.original_title || searched.original_name} />
                            )
                        })
                           
                        }
                       
                    </CardDiv>
                </CardContainer>
            </CardMain>
                    :
                    <Grid titleRow='Trending All Week' url={instance.fetchTrendingWeek} />
            }

            
        </>
    )
}

export default Search
