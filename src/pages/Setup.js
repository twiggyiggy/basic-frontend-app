import React, { Component } from 'react';
import { Redirect } from 'react-router-dom' 

import Navbar from '../components/Navbar.js';
import authService from '../services/auth-service.js';
import apiService from '../services/api-service.js';

class Setup extends Component {

  state = {
    category: '',
    interval: 2000,
    numberOfPhotos: '',
    wasFormSubmitted: false,
    photosFromUser: [],
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = await authService.getCurrentUser()
    const response = await apiService.getUserPhotos(user)
    const userPhotos = response.data
    console.log('setup handleSubmit',userPhotos)
    const userPhotoUrls = userPhotos.map(photoObj => photoObj.imageUrl)
    this.setState({
      wasFormSubmitted: true,
      photosFromUser: userPhotoUrls,
    })
  }

  randomizePhotos = (photos, numberOfPhotos) => {
    // get an array of photos - all of 'em (since it's an array, each photo will have an index)
    // create an array of 10 random unique numbers: 0 to numberOfPhotos.length
    // loop through the photos array - target photos at the selected indexes
    // push each targeted photo into new array: slideshowPhotos
  }

  
  setUpForm =
    <form onSubmit={this.handleSubmit} className="setup-container">
      <h3>What do you want to sketch?</h3>
      <div>
        <input type='radio' id='hands' name='category' value='hands' onChange={this.handleChange}/>
        <label htmlFor='hands'>hands</label>
        
        <input type='radio' id='feet' name='category' value='feet' onChange={this.handleChange}/>
        <label htmlFor='feet'>feet</label>
        
        <input type='radio' id='face' name='category' value='face' onChange={this.handleChange}/>
        <label htmlFor='face'>face</label>

        <input type='radio' id='figure' name='category' value='figure' onChange={this.handleChange}/>
        <label htmlFor='figure'>figure</label>
      
        <input type='radio' id='other' name='category' value='other' onChange={this.handleChange}/>
        <label htmlFor='other'>other</label>
      
        <input type='radio' id='all' name='category' value='all' onChange={this.handleChange}/>
        <label htmlFor='all'>All</label>
      </div>

      <h3>What time interval?</h3>
      <div>
        <input type='radio' id='30000' name='interval' value='30000' onChange={this.handleChange}/>
        <label htmlFor='30000'>30 seconds</label>

        <input type='radio' id='60000' name='interval' value='60000' onChange={this.handleChange}/>
        <label htmlFor='60000'>60 seconds</label>

        <input type='radio' id='120000' name='interval' value='120000' onChange={this.handleChange}/>
        <label htmlFor='120000'>2 minutes</label>

        <input type='radio' id='180000' name='interval' value='180000' onChange={this.handleChange}/>
        <label htmlFor='180000'>3 minutes</label>

        <input type='radio' id='300000' name='interval' value='300000' onChange={this.handleChange}/>
        <label htmlFor='300000'>5 minutes</label>
      </div>

      <h3>How many images?</h3>
      <div>
        <input type='radio' id='10' name='numberOfPhotos' value='10' onChange={this.handleChange}/>
        <label htmlFor='10'>10</label>

        <input type='radio' id='15' name='numberOfPhotos' value='15' onChange={this.handleChange}/>
        <label htmlFor='15'>15</label>

        <input type='radio' id='20' name='numberOfPhotos' value='20' onChange={this.handleChange}/>
        <label htmlFor='20'>20</label>
      </div>

      <button type='submit'>Get sketching!</button>
    </form>


      // vvv this should be removed once Slideshow starts receiving props.photos and props.iterationLength
    mockPhotos = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foot_on_white_background.jpg/345px-Foot_on_white_background.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/32/Human-Hands-Front-Back.jpg',
        'https://upload.wikimedia.org/wikipedia/en/e/e8/Samfacejr.jpg',
        'https://static.turbosquid.com/Preview/2015/02/17__07_42_52/Leg_render_1.jpg5f4dfaef-f39c-43ea-afe2-522e3788b169Original.jpg',
        'https://media.ottobock.com/_web-site/prosthetics/upper-limb/silicone-cover/images/_35236_dsc0088_169_4c_wb_1_1_hotspot_zoom.jpg'
    ]
    
    

  render() {
    const { photosFromUser } = this.state;
    return (
      <>
        <h2>Session setup:</h2> 
        {
          this.state.wasFormSubmitted
          ? <Redirect to={{
            pathname: '/slideshow',
            state: {
              photos: this.mockPhotos,
              iterationLength: this.state.interval,
              photosFromUser: photosFromUser,
            } 
          }}/>
          : this.setUpForm
        }
        <Navbar/>
      </>
    )
  }
}

export default Setup;