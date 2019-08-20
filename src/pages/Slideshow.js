import React, { Component } from 'react'
import Navbar from '../components/Navbar';

export class Slideshow extends Component {
    timeIterationStarted; timeElapsedFromIterationStart; timeRemainingInIteration; timeOfCurrentPause; 
    hasTimerBeenPaused;

    state = {
        photos: [],
        interval: 2000,
        currentPhotoIndex: 0,
        playing: true
    }
    
    setTimer = () => {
        this.timeIterationStarted = new Date();
        const nextInterval = this.hasTimerBeenPaused ? this.timeRemainingInIteration : this.state.interval
        this.timerID = setInterval(
            () => {
                this.hasTimerBeenPaused = false;
                this.showNextPhoto()
            },
            nextInterval
        );
    }

    togglePause = () => {
        if (this.state.playing) {
            this.hasTimerBeenPaused = true;
            this.timeOfCurrentPause = new Date();
            this.timeElapsedFromIterationStart = this.timeOfCurrentPause - this.timeIterationStarted;
            this.timeRemainingInIteration = this.state.interval - this.timeElapsedFromIterationStart;
            console.log(this.timeElapsedFromIterationStart)
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

    componentDidMount() {
        const { photos, interval } = this.props.location.state;
        this.setState({ photos, interval })
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
