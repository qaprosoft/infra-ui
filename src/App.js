import React, {useState} from 'react';
import {Header} from '@sh/header/Header'
import {isBrowser, browserName, deviceType} from "react-device-detect";
import {Home} from '@cnt/home/Home';
import {InfoBar} from '@sh/infoBar/InfoBar';
import {DataInfoBar} from '@cnt/home/dataHome';

document.body.setAttribute('class', isBrowser ? `desktop ${browserName}`  : deviceType);

const App = () => {

    const initState = {
        isOpen: false,
        isNews: true,
        infoBar: DataInfoBar
    }
    const [state, setState] = useState(initState);

    const openInfoBar = () => setState({...state, isOpen: true});
    const closeInfoBar = () => setState({...state, isOpen: false});

    const updateInfoBar = () => {
        console.log('------  update infoBar --------')
    }

    return (
        <div className="wrapper">
            <Header />
            <div className="wrapper__content">
                <Home openInfoBar={openInfoBar}/>
            </div>
            <InfoBar
                cls={state.isOpen ? 'ib _open' : 'ib'}
                infoBar={state.infoBar}
                isNews={state.isNews}
                closeInfoBar={closeInfoBar}
                updateInfoBar={updateInfoBar}
            />
        </div>
    )
}

export default App;
