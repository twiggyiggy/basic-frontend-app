import React, { Component } from 'react';
import apiService from '../services/api-service.js';
import {Redirect} from 'react-router-dom';

class AddPhoto extends Component {
  state = {
    imageUrl: '',
    category: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    const { imageUrl, category } = this.state;
    console.log({ imageUrl, category});
    
    event.preventDefault();
    apiService.addOnePhoto({
      imageUrl,
      category,
    })
    .then(response => {
      this.props.getUpdatedGalleryPhotos()
    })
    .catch(error => console.log(error))
  }


  render() {
    const { image, category, redirect } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='imageUrl'>image</label>
          <input type='text' id='imageUrl' onChange={this.handleChange} value={image} name='imageUrl'/>
          <label htmlFor='category'>Category</label>
          <select name='category' onChange={this.handleChange} value={category} id='category'>
            <option value=''>--Choose a category--</option>
            <option value='hands'>Hands</option>
            <option value='feet'>Feets</option>
            <option value='face'>Face</option>
            <option value='figure'>Figure</option>
            <option value='other'>Other</option>
          </select>
          <button type='submit'>Add new photo</button>
        </form>
        {redirect ? <Redirect to='/apps' /> : null}
      </div>
    )
  }
}

export default AddPhoto;