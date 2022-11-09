import React from 'react'
import Book from '../Component/bookclass/Book'
import Coach from '../Component/Coach/Coach'
import Fitnes from '../Component/fitness/Fitnes'
import Hero from '../Component/Hero/Hero'
import Message from '../Component/message/Message'
import Offer from '../Component/Offer/Offer'
import Program from '../Component/Program/Program'

const Home = () => {
  return (
    <>
    <Hero/>
    <Program/>
    <Offer/>
    <Coach/>
    <Book/>
    <Fitnes/>
    <Message/>
    
    
    </>
  )
}

export default Home