import React, { Component } from 'react';
import apiService from '../services/api-service.js'
// import authService from '../services/auth-service';
import withAuth from '../components/withAuth';

export class UserPhotos extends Component {

    handleDelete = (photoId) => {
        apiService.removePhoto(photoId)
        .then(()=> this.props.getUpdatedGalleryPhotos())
    }

    render() {
        const {userPhotos} = this.props;
        return (
            <>
                <section className='user-photos-container'>
                    {userPhotos.length > 0 ? userPhotos.map(photo => {
                        if (photo) 
                        return (
                            <article key={photo._id} className='photo-container'>
                                <img src={photo.imageUrl} alt='users file' />
                                <button onClick={() => {
                                    this.handleDelete(photo._id)
                                }}>Delete</button>
                            </article>
                        )
                        else return ""
                    }) : <p>Loading...</p>}
                </section>
            </>
        )
    }
}

export default withAuth(UserPhotos)
