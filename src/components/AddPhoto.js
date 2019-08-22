import React, { Component } from 'react';
import apiService from '../services/api-service.js';
import {Redirect} from 'react-router-dom';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";



class AddPhoto extends Component {
  state = {
    imageUrl: '',
    category: '',
    isUploading: false,
    progress: 0,
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url)
        this.setState({ imageUrl: url })
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    const { imageUrl, category } = this.state;
    // console.log('imageUrl: ', imageUrl)
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
    const { imageUrl, category, redirect, isUploading, progress } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='file'>Add a photo to your set:</label>
          {isUploading && <p>Progress: {progress}</p>}
          {imageUrl && <img src={imageUrl} alt='name'/>}
          <FileUploader
            accept="image/*"
            name="file"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          
          <select name='category' onChange={this.handleChange} value={category} id='category'>
            <option value=''>Set category</option>
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