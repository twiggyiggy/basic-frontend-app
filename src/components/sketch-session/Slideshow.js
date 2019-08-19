import React, { Component } from 'react'
import Navbar from '../Navbar';

export class Slideshow extends Component {
    timeIterationStarted; timeElapsedSinceIterationStart; timeRemainingInIteration; timeOfCurrentPause; 
    hasTimerBeenPausedSinceIterationStart;

    state = {
        photos: this.props.photos,
        currentPhotoIndex: 0,

        interval: 2000,

        playing: true
    }
    
    setTimer = () => {
        this.timeIterationStarted = new Date();
        const nextInterval = 
        this.hasTimerBeenPausedSinceIterationStart 
        ? this.timeRemainingInIteration 
        : this.state.interval
        this.timerID = setInterval(
            () => {
                this.hasTimerBeenPausedSinceIterationStart = false;
                this.showNextPhoto()
            },
            nextInterval
            );
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
        
    togglePause = () => {
        clearInterval(this.timerID);
        if (this.state.playing) {
            this.hasTimerBeenPausedSinceIterationStart = true;
            this.timeOfCurrentPause = new Date();
            this.timeElapsedSinceIterationStart = this.timeOfCurrentPause - this.timeIterationStarted;
            this.timeRemainingInIteration = this.state.interval - this.timeElapsedSinceIterationStart;
            this.setState({
                playing: false
            })
        } else {
            this.setState({
                playing: true
            })
        }
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
        if (this.state.playing) this.setTimer();

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
