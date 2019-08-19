import React from 'react'
import Navbar from '../components/Navbar'
import UserPhotos from '../components/UserPhotos'

function Gallery() {
  return (
    <div>
      <h1>User's Gallery</h1>
      <UserPhotos/>
      <Navbar/>
    </div>
  )
}

export default Gallery
