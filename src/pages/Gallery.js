import React from 'react'
import Navbar from '../components/Navbar'
import UserPhotos from '../components/UserPhotos'
import AddPhoto from '../components/AddPhoto';
import apiService from '../services/api-service.js'
import authService from '../services/auth-service'

class Gallery extends React.Component {
  state = {
    userPhotos: []
  }

  getGalleryPhotos = async () => {
    const user = await authService.getCurrentUser()
    .then(response => response)

    
    apiService.getUserPhotos(user)
    .then(response => {
      console.log(response)
        this.setState({
            userPhotos: response.data.reverse()
        })
      })
  }


  componentDidMount() {
    this.getGalleryPhotos();
  }

  render() {
    const {userPhotos} = this.state;

    return (
      <div className="gallery-container">
      <AddPhoto getUpdatedGalleryPhotos={this.getGalleryPhotos} />
      <UserPhotos userPhotos={userPhotos}/>
      <Navbar/>
    </div>
  )
}
}

export default Gallery
