import React from 'react'
import './style.scss'
import { HeroBanner } from './heroBanner/HeroBanner'
import { Trending } from './trending/Trending'
import { Popular } from './popular/Popular'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { TopRated } from './topRated/topRated'

export const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}
