import React, { Component } from 'react';
import apiService from '../services/api-service.js'
import authService from '../services/auth-service'

export class UserPhotos extends Component {

    state = {
        userPhotos: []
    }

    componentDidMount = async () => {
        const user = await authService.getCurrentUser()
        .then(response => response)
        apiService.getUserPhotos(user)
        .then(response => (
            this.setState({
                userPhotos: response.data
            })
        ))
    }
    // getCurrentUser - siega do DB po obiekt uzytkownika (response what?), getUSerPhotos - sega do DB po array z obiektami zdjec, w response zachowuje je w stanie komponentu - pozniej do wyswietlenia na stronie


    render() {
        const {userPhotos} = this.state;
        return (
            <>
                <section className='user-photos-container'>
                    {userPhotos.length > 0 ? userPhotos.map(photo => {
                        return (
                            <article key={photo._id} className='photo-container'>
                                <img src={photo.imageUrl} alt='users file' />
                                <p onClick={() => {this.handleDeleteClick(photo._id)}}>
                                    ⃠
                                </p>
                            </article>
                        )
                    }) : <p>Loading...</p>}
                </section>
            </>
        )
    }
}

export default UserPhotos
