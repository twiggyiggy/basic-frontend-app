import axios from 'axios';

class ApiService {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/api/'
        })
    }

    getUserPhotos(user) {
        const userId = user._id
        return this.api.get(`photos/${userId}`)
        .then(response => response)
    }

}

const apiService = new ApiService();
export default apiService;