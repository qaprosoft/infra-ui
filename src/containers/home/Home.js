import React, { useState } from 'react'
import { DataCards, DataUpdate, DataNews } from '@cnt/home/dataHome'
import { SCards } from '@c-s/s-cards/SCards'
import { InfoBar } from '@sh/infoBar/InfoBar'
import { Header } from '@sh/header/Header'

export const Home = () => {
    const initState = {
        isOpen: false,
        news: DataNews.info.length,
    }
    const [state, setState] = useState(initState)

    const openInfoBar = (news) =>
        setState({
            isOpen: true,
            news: news,
            infoBar: news ? DataNews : DataUpdate,
        })

    const closeInfoBar = () => setState({ ...state, isOpen: false, news: 0 })

    const updateInfoBar = () => {
        console.log('------  update infoBar --------')
    }

    return (
        <>
            <Header news={state.news} openInfoBar={openInfoBar} />
            <div className="wp__content">
                <SCards cards={DataCards} openInfoBar={openInfoBar} />
            </div>
            <InfoBar
                isOpen={state.isOpen}
                infoBar={state.infoBar}
                news={state.news}
                closeInfoBar={closeInfoBar}
                updateInfoBar={updateInfoBar}
            />
        </>
    )
}
