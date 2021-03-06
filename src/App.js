import React from 'react'
import { isBrowser, browserName, deviceType } from 'react-device-detect'
import { Home } from '@cnt/home/Home'

document.body.setAttribute(
    'class',
    isBrowser ? `desktop ${browserName}` : deviceType
)

const App = () => {
    return (
        <div className="wp">
            <Home />
        </div>
    )
}

export default App
