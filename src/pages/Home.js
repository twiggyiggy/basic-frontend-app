import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import milligram from 'milligram'
import BozoLogo from '../icons/bozo-logo.png'


export default class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <header>
          <img src={BozoLogo} alt="bozo logo"/>
          <h1>Bozo</h1>
          <>
            <Link to='/login'>
              <button>Log in</button>
            </Link>
            <Link to='/signup'>
            <button>Sign up</button>
            </Link>
          </>
        </header>
        <section>
          <div className='home-image-container'>
            <img src="https://i.pinimg.com/originals/85/22/71/85227135996b4b11ee2ddbbae0a62007.jpg" alt="man perching on box"/>
            <img src="https://i.pinimg.com/originals/c2/b4/22/c2b422d5c0cb01d2619eda79951614b3.jpg" alt="man perching on box"/>
            <img src="https://i.pinimg.com/originals/35/8d/de/358dde0abf6037061b3d3308cb14073d.jpg" alt="man perching on box"/>
          </div>
          <h2>Improve your sketching skills</h2>
          <p>
            Just as important as the ability to create an elaborate 
            and naturalistic scene or portrait, mastering spontaneous
            but accurate gesture drawing takes practice. 
          </p>
          <img src="http://c2.peakpx.com/wallpaper/365/487/654/sculpture-drawing-woman-art-artistic-wallpaper.jpg" alt="ancient woman doing her bit of sketching"/>
          <h2>Create custom training sessions</h2>
          <p>
            Sharpen your abilities with custom study sessions, setting
            a comfortable time limit for each reference photo
            and when you feel like you've got it: turn up the tempo!
          </p>
          <img src="https://idrawgirls.com/tutorials/wp-content/uploads/2011/11/gesture-drawing-with-pen.jpg" alt="sketches of women"/>
          <h2>Upload your photos and take control of your growth</h2>
          <p>
            Give your efforts more focus by concentrating on the areas
            you feel need improvement. Use our Category™ feature to
            compose custom study sessions, sorting out the tricky bits
            of anatomy which can so easily trip us up on our way to
            masterful, calligraphic draughtsmanship.
          </p>
        </section>
      </div>
    )
  }
}
