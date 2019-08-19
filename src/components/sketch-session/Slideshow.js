import React, { Component } from 'react'
import Navbar from '../Navbar';

export class Slideshow extends Component {
    timeStarted; timeElapsed; timeRemaining; timePaused; hasBeenPaused;

    state = {
        photos: this.props.photos,
        interval: 2000,
        counter: 0,
        currentPhotoIndex: 0,
        playing: true
    }
    
    setTimer = () => {
        this.timeStarted = new Date();
        const nextInterval = this.hasBeenPaused ? this.timeRemaining : this.state.interval
        this.hasBeenPaused = false;
        this.timerID = setInterval(
            () => this.showNextPhoto(),
            nextInterval
        );
    }

    togglePause = () => {
        if (this.state.playing) {
        
            this.hasBeenPaused = true;
            this.timePaused = new Date();
            this.timeElapsed = this.timePaused - this.timeStarted;
            this.timeRemaining = this.state.interval - this.timeElapsed;
            console.log(this.timeElapsed)
            this.setState({
                playing: false
            })
        } else {
            this.setState({
                playing: true
            })
        }
    }

    showNextPhoto = () => {
        clearInterval(this.timerID);
        let nextPhotoIndex = this.state.currentPhotoIndex+1;
        if (nextPhotoIndex >= this.state.photos.length) {
            nextPhotoIndex = 0
        }
        this.setState({
            currentPhotoIndex: nextPhotoIndex
        })
    }
    
    showPreviousPhoto = () => {
        clearInterval(this.timerID);
        let previousPhotoIndex = this.state.currentPhotoIndex-1;
        if (previousPhotoIndex < 0) {
            previousPhotoIndex = this.state.photos.length-1
        }
        this.setState({
            currentPhotoIndex: previousPhotoIndex
        })
    }

    showPhotoAtIndex (index) {
        return <img 
            src={this.state.photos[index]} 
            alt={'photo number '+ (index+1)}
        />
    }

    render() {
        if (this.state.playing) {
            this.setTimer();
        } else {
            clearInterval(this.timerID);
        }
        return (
            <div className="slide-show-container">
                <div className="slide-show-photo-container">
                    {this.showPhotoAtIndex(this.state.currentPhotoIndex)}
                </div>
                <div className="slide-show-controls">
                    <button onClick={this.showPreviousPhoto}>⟸</button>
                    <button onClick={this.togglePause}>||</button>
                    <button onClick={this.showNextPhoto}>⟹</button>
                </div>
                <Navbar/>
            </div>
        )
    }
}

export default Slideshow
