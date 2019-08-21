import React, { Component } from 'react'
import Navbar from '../components/Navbar';

export class Slideshow extends Component {
    
    state = {
        photos: this.props.location.state.photosFromUser,
        cycleLength: this.props.location.state.iterationLength/1000,
        secondsLeftInCycle: this.props.location.state.iterationLength/1000,
        currentPhotoIndex: 0,
        maxPhotoIndex: this.props.location.state.photosFromUser.length-1,
        playing: true,
        finished: false
    }

    componentDidMount = () => {
        this.startTimer();
    }
    
    componentDidUpdate = () => {
        const {secondsLeftInCycle} = this.state;
        if (secondsLeftInCycle === 0) {
            this.startNextCycle();
        }
    }

    componentWillUnmount = () => {
        this.stopTimer();
    }
    
    startTimer = () => {
        console.log('hello')
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    stopTimer = () => {
        clearInterval(this.timer)
    }

    tick = () => {
        const {secondsLeftInCycle} = this.state;
        this.setState({
            secondsLeftInCycle: secondsLeftInCycle-1
        })
    }

    startNextCycle = () => {
        let {cycleLength, currentPhotoIndex, maxPhotoIndex} = this.state;
        if (currentPhotoIndex === maxPhotoIndex) {
            this.setState({finished: true})
        } else {
            currentPhotoIndex++
        }
        this.setState({
            currentPhotoIndex: currentPhotoIndex,
            secondsLeftInCycle: cycleLength
        })
    }

    startPreviousCycle = () => {
        let {cycleLength, currentPhotoIndex} = this.state;
        if (currentPhotoIndex !== 0) {
            this.setState({
                currentPhotoIndex: currentPhotoIndex-1,
                secondsLeftInCycle: cycleLength
            })
        }
    }

    restartSlideshow = () => {
        this.setState({
            currentPhotoIndex: 0,
            secondsLeftInCycle: this.state.cycleLength,
            finished: false
        })
    }

    togglePause = () => {
        if (this.state.playing) {
            this.stopTimer()
            this.setState({
                playing: false
            })
        } else {
            this.startTimer()
            this.setState({
                playing: true
            })
        }
    }

    displayTimeRemaining = () => {
        const {secondsLeftInCycle} = this.state;
        let minutes = Math.floor(secondsLeftInCycle/60);
        let seconds = secondsLeftInCycle % 60
        minutes = this.padToTwoDigits(minutes);
        seconds = this.padToTwoDigits(seconds);
        return <>{minutes}:{seconds}</>
    }

    padToTwoDigits = (number) => {
        return number < 10
            ? '0' + number.toString()
            : number
    }
    
    showPhotoAtIndex (index) {
        return <img 
            src={this.state.photos[index]} 
            alt={'photo number '+ (index+1)}
        />
    }

    slideshow = () =>
        <div className="slide-show-container">
            <div className="slide-show-photo-container">
                {this.showPhotoAtIndex(this.state.currentPhotoIndex)}
            </div>
            <div className="slide-show-counter">
                {this.displayTimeRemaining()}
            </div>
            <div className="slide-show-controls">
                <button onClick={this.startPreviousCycle}>⟸</button>
                <button onClick={this.togglePause}>||</button>
                <button onClick={this.startNextCycle}>⟹</button>
            </div>
        </div>

    endScreen = () =>
        <div className="slide-show-endscreen">
            <h1>Finished!</h1>
            <button onClick={this.restartSlideshow}>One more time?</button>
            <section>
                    {
                        this.state.photos.map(photo => {
                        return (
                            <article key={photo}>
                                <img src={photo} alt='users file' />
                            </article>
                        )
                        })
                    }
            </section>
        </div>
    
    render() {
        const {finished} = this.state;
        return (
            <>
                {
                    finished
                    ? this.endScreen()
                    : this.slideshow()
                }
                <Navbar/>
            </>
        )
    }
}

export default Slideshow
