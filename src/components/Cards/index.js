import React from 'react'
import { CardsContainer, Image, OverLay, Title } from './CardsElements'

const IMAGE = 'https://image.tmdb.org/t/p/w500'

const Cards = ({image,title}) => {
    return (
        <>
            <CardsContainer>
                <Image src={IMAGE + image } alt='image' />

                <OverLay>
                    <Title>
                        {
                        title
                        }
                    </Title>
                </OverLay>

            </CardsContainer>
        </>
    )
}

export default Cards
