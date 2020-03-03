import React from 'react';
import {Header} from '@sh/header/Header'
import {isBrowser, browserName, deviceType} from "react-device-detect";
import {Home} from '@cnt/home/Home';

document.body.setAttribute('class', isBrowser ? `desktop ${browserName}`  : deviceType);

const App = () => (

    <div className="wrapper">
        <Header />
        <div className="wrapper__content">
            <Home />
        </div>
    </div>
)

export default App;
