import React, { Component } from 'react'
import Navbar from '../components/Navbar';

export class Slideshow extends Component {
    
    state = {
        cycleLength: 5,
        secondsLeftInCycle: 5,
        currentPhotoIndex: 0,
        maxPhotoIndex: 5,
        playing: true
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
    
    startTimer = () => {
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
            currentPhotoIndex = 0
        } else {
            currentPhotoIndex++
        }
        this.setState({
            currentPhotoIndex: currentPhotoIndex,
            secondsLeftInCycle: cycleLength
        })
    }

    startPreviousCycle = () => {
        let {cycleLength, currentPhotoIndex, maxPhotoIndex} = this.state;
        if (currentPhotoIndex === 0) {
            currentPhotoIndex = maxPhotoIndex
        } else {
            currentPhotoIndex--
        }
        this.setState({
            currentPhotoIndex: currentPhotoIndex,
            secondsLeftInCycle: cycleLength
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
    
    
    render() {
        return (
            <>
                <div className="slide-show-container">
                    <div className="slide-show-photo-container">
                        {this.state.secondsLeftInCycle} s rem on photo @ index {this.state.currentPhotoIndex}
                    </div>
                    <div className="slide-show-controls">
                        <button onClick={this.startPreviousCycle}>⟸</button>
                        <button onClick={this.togglePause}>||</button>
                        <button onClick={this.startNextCycle}>⟹</button>
                    </div>
                </div>
                <Navbar/>
            </>
        )
    }
}

export default Slideshow
