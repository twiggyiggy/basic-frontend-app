import React from 'react'
import Navbar from '../components/Navbar'
import UserPhotos from '../components/UserPhotos'
import AddPhoto from '../components/AddPhoto';

function Gallery() {
  return (
    <>
      <div className="gallery-container">
        <header>
          <h1>Bozo</h1>
        </header>
        <AddPhoto />
        <UserPhotos/>
      </div>
      <Navbar/>
    </>
  )
}

export default Gallery
