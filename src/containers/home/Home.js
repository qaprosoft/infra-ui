import React, { useState, useEffect } from 'react'
import { DataCards, Messages } from '@cnt/home/dataHome'
import { SCards } from '@c-s/s-cards/SCards'
import { InfoBar } from '@sh/infoBar/InfoBar'
import { Header } from '@sh/header/Header'
import { BLoader } from '@c-b/b-loader/BLoader'
import axios from 'axios'

export const Home = () => {
    const initStateMsg = {
        isOpen: false,
        unreadMsgAmount: Messages.length || 0,
    }
    const initStateCards = {
        data: [],
        loading: true,
    }
    const [stateMsg, setStateMsg] = useState(initStateMsg)
    const [stateCards, setStateCards] = useState(initStateCards)

    const url = process.env.INTEGRATION_URL

    const getCards = async () => {
        try {
            const res = await axios.get(url)
            setStateCards({ data: res.data, loading: false })
        } catch (e) {
            setStateCards({ data: DataCards, loading: false })
        }
    }

    useEffect(() => {
        if (!url) {
            return setStateCards({ data: DataCards, loading: false })
        }
        getCards()
    }, [])

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
                {stateCards.loading ? (
                    <BLoader />
                ) : (
                    <SCards cards={stateCards.data} />
                )}
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
