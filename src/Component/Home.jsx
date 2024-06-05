import React from 'react'
import { Hero } from './Hero'
import { TopRated } from './HomePageData/TopRated'
import { Trending } from './HomePageData/Trending'
import { Popular } from './HomePageData/Popular'
export const Home = () => {
  return (
    <>
    <main>
        <div className='w-full  bg-gray-700'>
              <Hero/>
              <div className='moviesData w-4/5 m-auto'>
                <div className='pt-4 pb-4'>
                  <Trending/>
                </div>

                <div className='pt-4 pb-4'>
                  <Popular/>
                </div>

                <div className='pt-4 pb-4'>
                  <TopRated/>
                </div>
               
              </div>
        
        </div>
    </main>
        













        
            {/* TopRted
            <div className='w-4/5 m-auto'>
                <TopRated/>
            </div> */}
     
    </>
  )
}
