import React, { Component } from 'react'
import Navbar from '../Navbar';

export class Slideshow extends Component {
    isIterationRunning;
    timeIterationStarted; timeElapsedInIteration;
    timePlayCycleStarted;
    intervalOfNextPlayCycle;
    hasTimerBeenPausedLastCycle;
    timer;


    state = {
        photos: this.props.photos,
        currentPhotoIndex: 0,
        
        iterationLength: 2000,
        
        playing: true
    }
    
    play = () => {
        this.timePlayCycleStarted = new Date();
        this.hasTimerBeenPausedLastCycle = false;
        if (this.timer) clearInterval(this.timer);
        this.setTimer();
    }
    
    setTimer = () => {

        this.timer = setInterval(
            () => {
                this.intervalOfNextPlayCycle = this.state.iterationLength
                this.startNextIteration()
            },
            this.intervalOfNextPlayCycle
            );
    }
    
    startNextIteration = () => {
        this.timeElapsedInIteration = 0;
        this.timeIterationStarted = new Date();
        this.showNextPhoto();
    }
        
    showNextPhoto = () => {
        let nextPhotoIndex = this.state.currentPhotoIndex+1;
        if (nextPhotoIndex >= this.state.photos.length) {
            nextPhotoIndex = 0
        }
        this.setState({
            currentPhotoIndex: nextPhotoIndex
        })
    }
    
    showPreviousPhoto = () => {
        let previousPhotoIndex = this.state.currentPhotoIndex-1;
        if (previousPhotoIndex < 0) {
            previousPhotoIndex = this.state.photos.length-1
        }
        this.setState({
            currentPhotoIndex: previousPhotoIndex
        })
    }

    togglePause = () => {
        if (this.state.playing) {
            clearInterval(this.timer)
            this.hasTimerBeenPausedLastCycle = true;
            const endOfPlayCycle = new Date();
            const timeElapsedThisPlayCycle = endOfPlayCycle - this.timePlayCycleStarted;
            this.timeElapsedInIteration += timeElapsedThisPlayCycle;
            this.intervalOfNextPlayCycle = this.state.iterationLength - this.timeElapsedInIteration;
            this.setState({
                playing: false
            })
        } else {
            this.setState({
                playing: true
            })
        }
    }

    

    showPhotoAtIndex (index) {
        return <img 
            src={this.state.photos[index]} 
            alt={'photo number '+ (index+1)}
        />
    }

    render() {
        if (this.state.playing) this.play();
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
