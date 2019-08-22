import React from 'react'
import BozoLogo from '../icons/bozo-logo.png'

export default function Header() {
    return (
        <header className="bozo-header">
            <img src={BozoLogo} alt="bozo logo"/>
            <h1>Bozo</h1>
        </header>
    )
}
