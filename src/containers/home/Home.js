import React, { useState } from 'react'
import { DataCards, Messages } from '@cnt/home/dataHome'
import { SCards } from '@c-s/s-cards/SCards'
import { InfoBar } from '@sh/infoBar/InfoBar'
import { Header } from '@sh/header/Header'

export const Home = () => {
    const initStateCards = [...DataCards]
    const [stateCards, setStateCards] = useState(initStateCards)

    const initStateMsg = {
        isOpen: false,
        messagesAmount: Messages.length || 0,
    }
    const [stateMsg, setStateMsg] = useState(initStateMsg)

    const openInfoBar = (messagesAmount) =>
        setStateMsg({
            isOpen: true,
            messagesAmount: messagesAmount,
            messages: Messages,
        })

    const closeInfoBar = () =>
        setStateMsg({ ...stateMsg, isOpen: false, messagesAmount: 0 })

    return (
        <>
            <Header
                messagesAmount={stateMsg.messagesAmount}
                openInfoBar={openInfoBar}
            />
            <div className="wp__content">
                <SCards cards={stateCards} />
            </div>
            <InfoBar
                isOpen={stateMsg.isOpen}
                messages={stateMsg.messages}
                messagesAmount={stateMsg.messagesAmount}
                closeInfoBar={closeInfoBar}
            />
        </>
    )
}
