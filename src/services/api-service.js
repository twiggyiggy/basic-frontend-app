import axios from 'axios';

class ApiService {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/api/'
        })
    }

    getUserPhotos(user) {
        const userId = user._id // method accepts user object as arg - with _id property to be extracted
        return this.api.get(`photos/${userId}`) // using axios, request 
        .then(response => response)
    }
// *** unnecessary! Better to fetch ALL user's photos (see fn above), then filter that array?
    // getSlideshowPhotos(category, numberOfPhotos, user) {
    //     const userId = user._id
    //     return this.api.get(`photos/${userId}`)
    //     .then(response => response)
    // }
}

const apiService = new ApiService();
export default apiService;