import React from 'react'
import Navbar from '../components/Navbar'
import UserPhotos from '../components/UserPhotos'

function Gallery() {
  return (
    <div>
      <h1>Gallery Control Panel</h1>
      <UserPhotos/>
      <Navbar/>
    </div>
  )
}

export default Gallery
