import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom' 
import { thisExpression } from '@babel/types';

class Setup extends Component {

  wasFormSubmitted = false;

  state = {
    category: '',
    interval: '',
    numberOfPhotos: 1,
    wasFormSubmitted: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    console.log("handling submit")
    const { category, interval, numberOfPhotos } = this.state;
    event.preventDefault();
    

    // this.getPicsFromApi()
    //   .then((photos) => {
    //       const { interval } = this.state;
    //       this.props.history.push({ 
    //         pathname: '/slideshow',
    //         state: { photos, interval: Number(interval) }
    //       })
    //   })

    
    this.setState({
      wasFormSubmitted: true
    })
  }

  getPicsFromApi = () => {

  }

  setUpForm =
    <form onSubmit={this.handleSubmit}>
      <p>What would you like to sketch?</p>
      <div className='radio-container'>
        <label htmlFor='hands'>Hands</label>
        <input type='radio' id='hands' name='category' value='hands' onChange={this.handleOnChange}/>
        
        <label htmlFor='feet'>Feet</label>
        <input type='radio' id='feet' name='category' value='feet' onChange={this.handleOnChange}/>
        
        <label htmlFor='face'>Face</label>
        <input type='radio' id='face' name='category' value='face' onChange={this.handleOnChange}/>

        <label htmlFor='figure'>Figure</label>
        <input type='radio' id='figure' name='category' value='figure' onChange={this.handleOnChange}/>
      
        <label htmlFor='other'>Other</label>
        <input type='radio' id='other' name='category' value='other' onChange={this.handleOnChange}/>
      
        <label htmlFor='all'>All</label>
        <input type='radio' id='all' name='category' value='all' onChange={this.handleOnChange}/>
      </div>

      <p>How long would you like to see each photo for?</p>
      <div className='radio-container'>
        <label htmlFor='30000'>30 seconds</label>
        <input type='radio' id='30000' name='interval' value='30000' />

        <label htmlFor='60000'>60 seconds</label>
        <input type='radio' id='60000' name='interval' value='60000' />

        <label htmlFor='120000'>2 minutes</label>
        <input type='radio' id='120000' name='interval' value='120000' />

        <label htmlFor='180000'>3 minutes</label>
        <input type='radio' id='180000' name='interval' value='180000' />

        <label htmlFor='300000'>5 minutes</label>
        <input type='radio' id='300000' name='interval' value='300000' />
      </div>

      <p>How many photos would you like to sketch?</p>
      <div className='radio-container'>
        <label htmlFor='10'>10</label>
        <input type='radio' id='10' name='numberOfPhotos' value='10' />

        <label htmlFor='15'>15</label>
        <input type='radio' id='15' name='numberOfPhotos' value='15' />

        <label htmlFor='20'>20</label>
        <input type='radio' id='20' name='numberOfPhotos' value='20' />
      </div>

      <button type='submit'>Start session</button>
    </form>
  
  redirectToSlideshow = <Redirect to={{
    pathname: '/slideshow',
    dataForSlideshow: {

    } 
  }}/>

  render() {
    const { category, interval, numberOfPhotos } = this.state;
    return (
      <>
        {
          this.state.wasFormSubmitted
          ? this.redirectToSlideshow
          : this.setUpForm
        }
      </>
    )
  }
}

export default withRouter(Setup);

          // <label htmlFor='category'>What would you like to sketch?</label>
          // <select name='category' id='category' onChange={this.handleChange} value='category'>
          //   <option value=''>Choose a category</option>
          //   <option value='hands'>Hands</option>
          //   <option value='feet'>Feet</option>
          //   <option value='face'>Face</option>
          //   <option value='figure'>Figure</option>
          //   <option value='other'>Other</option>
          //   <option value='all'>All</option>
          // </select>
          // <label htmlFor='time'>How long would you like to see each photo for?</label>
          // <select name='time' id='time' onChange={this.handleChange} value='time'>
          //   <option value=''>Chose a time interval</option>
          //   <option value='30000'>30 seconds</option>
          //   <option value='60000'>60 seconds</option>
          //   <option value='12000'>2 minutes</option>
          //   <option value='180000'>3 minutes</option>
          //   <option value='300000'>5 minutes</option>
          // </select>
          // <label htmlFor='numberOfPhotos'>How many images would you like to sketch?</label>
          // <select name='numberOfPhotos' id='numberOfPhotos' onChange={this.handleChange} value='numberOfPhotos'>
          //   <option value=''>Choose the number of photos</option>
          //   <option value='10'>10</option>
          //   <option value='15'>15</option>
          //   <option value='20'>20</option>
          // </select>