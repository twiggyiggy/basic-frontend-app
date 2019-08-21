import axios from 'axios';

class ApiService {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/api/',
            withCredentials: true,
        })
    }

    getUserPhotos = async (user) => {
        const userId = user._id // method accepts user object as arg - with _id property to be extracted
        const userPhotos = await this.api.get(`photos/${userId}`) // using axios, request 
        .then(response => response)
        return userPhotos
    }

    addOnePhoto(newPhoto) {
        return this.api.post('/photos/add', newPhoto)
        .then(response => response);
      }

    removePhoto(photoId) {
        return this.api.delete(`photos/${photoId}/delete`)
        .then(response => response)
    }
}

const apiService = new ApiService();
export default apiService;