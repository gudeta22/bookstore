import React from 'react'
import Footer from '../footer/footer.js'
import Landingpage from '../mainpage/Landingpage'
import PostsDisplay from './PostsDisplay'


function Home() {
  return (
    <div>
        <Landingpage />
        <PostsDisplay />
        <Footer />
    </div>
  )
}

export default Home