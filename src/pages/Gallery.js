import React from 'react'
import Navbar from '../components/Navbar'
import UserPhotos from '../components/UserPhotos'
import AddPhoto from '../components/AddPhoto';

function Gallery() {
  return (
    <div className="gallery-container">
      <AddPhoto />
      <UserPhotos/>
      <Navbar/>
    </div>
  )
}

export default Gallery
