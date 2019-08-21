import React, { Component } from 'react';
import apiService from '../services/api-service.js'
import authService from '../services/auth-service';
import withAuth from '../components/withAuth';

export class UserPhotos extends Component {

    // // state = {
    // //     userPhotos: []
    // // }

    // componentDidMount = async () => {
    //     const user = await authService.getCurrentUser()
    //     .then(response => response)
    //     apiService.getUserPhotos(user)
    //     .then(response => (
    //         this.setState({
    //             userPhotos: response.data
    //         })
    //     ))
    // }
    // getCurrentUser - siega do DB po obiekt uzytkownika (response what?), getUSerPhotos - sega do DB po array z obiektami zdjec, w response zachowuje je w stanie komponentu - pozniej do wyswietlenia na stronie

    handleDelete = (photoId) => {
        apiService.removePhoto(photoId)
        .then(
            this.props.getUpdatedGalleryPhotos()
        )
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
                                <p onClick={() => {this.handleDelete(photo._id)}}>
                                    ⃠
                                </p>
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
