import React from 'react'
import Navbar from '../components/Navbar'
import UserPhotos from '../components/UserPhotos'

function Gallery() {
  return (
    <div className="gallery-container">
      <UserPhotos/>
      <Navbar/>
    </div>
  )
}

export default Gallery
