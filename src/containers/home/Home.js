import React, { useState } from 'react'
import { DataCards, Messages } from '@cnt/home/dataHome'
import { SCards } from '@c-s/s-cards/SCards'
import { InfoBar } from '@sh/infoBar/InfoBar'
import { Header } from '@sh/header/Header'

export const Home = () => {
    const [stateCards, setStateCards] = useState(DataCards)

    const initStateMsg = {
        isOpen: false,
        unreadMsgAmount: Messages.length || 0,
    }
    const [stateMsg, setStateMsg] = useState(initStateMsg)

    const openInfoBar = (unreadMsgAmount) =>
        setStateMsg({
            isOpen: true,
            unreadMsgAmount: unreadMsgAmount,
            messages: Messages,
        })

    const closeInfoBar = () =>
        setStateMsg({ ...stateMsg, isOpen: false, unreadMsgAmount: 0 })

    return (
        <>
            <Header
                unreadMsgAmount={stateMsg.unreadMsgAmount}
                openInfoBar={openInfoBar}
            />
            <div className="wp__content">
                <SCards cards={stateCards} />
            </div>
            <InfoBar
                isOpen={stateMsg.isOpen}
                messages={stateMsg.messages}
                unreadMsgAmount={stateMsg.unreadMsgAmount}
                closeInfoBar={closeInfoBar}
            />
        </>
    )
}
