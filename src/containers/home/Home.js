import React, { useState } from 'react'
import { DataCards, Messages } from '@cnt/home/dataHome'
import { SCards } from '@c-s/s-cards/SCards'
import { InfoBar } from '@sh/infoBar/InfoBar'
import { Header } from '@sh/header/Header'

export const Home = () => {
    const initState = {
        isOpen: false,
        messagesAmount: Messages.length || 0,
    }
    const [state, setState] = useState(initState)

    const openInfoBar = (messagesAmount) =>
        setState({
            isOpen: true,
            messagesAmount: messagesAmount,
            messages: Messages,
        })

    const closeInfoBar = () =>
        setState({ ...state, isOpen: false, messagesAmount: 0 })

    const updateInfoBar = () => {
        console.log('------  update messages --------')
    }

    return (
        <>
            <Header
                messagesAmount={state.messagesAmount}
                openInfoBar={openInfoBar}
            />
            <div className="wp__content">
                <SCards cards={DataCards} />
            </div>
            <InfoBar
                isOpen={state.isOpen}
                messages={state.messages}
                messagesAmount={state.messagesAmount}
                closeInfoBar={closeInfoBar}
                updateInfoBar={updateInfoBar}
            />
        </>
    )
}
