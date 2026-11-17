import React from 'react'
import Carousel from './Carousel'
import Slides from './Slides'
import ProdCards from './ProdCards'
import Service from './Service'

const Home = () => {
    return (
        <>
            <Carousel />
            <Slides />
            <ProdCards />
            <Service />
        </>
    )
}

export default Home