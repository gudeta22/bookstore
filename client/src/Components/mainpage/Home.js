import React from 'react'
import Footer from '../footer/footer.js'
import Landingpage from '../mainpage/Landingpage'
import PostsDisplay from './PostsDisplay'
import Service from './Service.js'


function Home() {
  return (
    <div>
        <Landingpage />
        <PostsDisplay />
        <Service />
        <Footer />
    </div>
  )
}

export default Home