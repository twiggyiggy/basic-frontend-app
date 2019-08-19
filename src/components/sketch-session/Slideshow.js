import React, { Component } from 'react'

export class Slideshow extends Component {
    state = {
        photos: this.props.photos,
        interval: 2000,
        counter: 0,
        currentPhotoIndex: 0
    }
    
    setTimer () {
        this.timerID = setInterval(
            () => this.showNextPhoto(),
            this.state.interval
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
        this.setTimer();
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
            </div>
        )
    }
}

export default Slideshow
