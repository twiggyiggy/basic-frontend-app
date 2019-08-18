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
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ dzieki temu setState mamy w state.userPhotos array z photosami obecnie zalogowanego uzytkownika


    render() {
        return (
            <>

            </>
        )
    }
}

export default UserPhotos
