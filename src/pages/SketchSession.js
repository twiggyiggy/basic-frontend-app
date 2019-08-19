import React, { Component } from 'react'
import Slideshow from '../components/sketch-session/Slideshow.js';

export class SketchSession extends Component {
    state = {
        currentComponent: 'slideshow',
        currentUsersPhotos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foot_on_white_background.jpg/345px-Foot_on_white_background.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/3/32/Human-Hands-Front-Back.jpg',
            'https://upload.wikimedia.org/wikipedia/en/e/e8/Samfacejr.jpg',
            'https://static.turbosquid.com/Preview/2015/02/17__07_42_52/Leg_render_1.jpg5f4dfaef-f39c-43ea-afe2-522e3788b169Original.jpg',
            'https://media.ottobock.com/_web-site/prosthetics/upper-limb/silicone-cover/images/_35236_dsc0088_169_4c_wb_1_1_hotspot_zoom.jpg'
        ]
    }

    render() {
        let componentToRender;
        if (this.state.currentComponent==='slideshow') {
            componentToRender = <Slideshow photos={this.state.currentUsersPhotos}/>
        }
        return (
            <>
                {/* <h1>Sketch Session!</h1> */}
                {componentToRender}
            </>
        )
    }
}

export default SketchSession
