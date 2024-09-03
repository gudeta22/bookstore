import React from 'react'

import Landingpage from '../mainpage/Landingpage'
import PostsDisplay from './PostsDisplay'


function Home() {
  return (
    <div>
        <Landingpage />
        <PostsDisplay />
    </div>
  )
}

export default Home