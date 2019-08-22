import React, { Component } from 'react';
import apiService from '../services/api-service.js'
// import authService from '../services/auth-service';
import withAuth from '../components/withAuth';
import EditIcon from '../icons/edit-icon.png';
import DeleteIcon from '../icons/delete-icon.png'

export class UserPhotos extends Component {

    handleDelete = (photoId) => {
        apiService.removePhoto(photoId)
        .then(()=> this.props.getUpdatedGalleryPhotos())
    }

    handleUpdate = (photoId) => {
        apiService.updatePhoto(photoId)
        .then(()=>{})
    }

    render() {
        const {userPhotos} = this.props;
        return (
            <>
                <section className='user-photos-container'>
                    {userPhotos.length > 0 ? userPhotos.map(photo => {
                        if (photo) 
                        return (
                            <section className="user-photo-card">
                                <article key={photo._id} className='photo-container'>
                                    <img src={photo.imageUrl} alt='users file' />
                                </article>
                                <article className="user-photos-control">
                                    <img src={EditIcon} alt="edit icon"/>
                                    <img src={DeleteIcon} alt="delete icon" onClick={() => this.handleDelete(photo._id)}/>
                                </article>
                            </section>
                        )
                        else return ""
                    }) : <p>Loading...</p>}
                </section>
            </>
        )
    }
}

export default withAuth(UserPhotos)
