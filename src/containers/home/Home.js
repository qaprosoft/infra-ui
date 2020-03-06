import React, {useState} from 'react'
import {DataProducts, DataCards, DataUpdate, DataNews} from '@cnt/home/dataHome';
import {SProduct} from '@c-s/s-product/SProduct';
import {SCards} from '@c-s/s-cards/SCards';
import {InfoBar} from '@sh/infoBar/InfoBar';

export const Home = () => {

    const initState = {
        isOpen: false,
        news: 0,
        infoBar: DataUpdate
    }
    const [state, setState] = useState(initState);

    const openInfoBar = (news) => setState({isOpen: true, news: news, infoBar: news ? DataNews : DataUpdate});
    const closeInfoBar = () => setState({...state, isOpen: false});

    const updateInfoBar = () => {
        console.log('------  update infoBar --------')
    }

    return (
        <>
            <div className="wp__content">
                <SCards
                    cards={DataCards}
                    openInfoBar={openInfoBar}
                />
                {
                    DataProducts.map((section, i) => {
                        return  (
                            <SProduct
                                top={section.top}
                                tabsInfo={section.tabsInfo}
                                tabsShow={section.tabsShow}
                                key={i}
                            />
                        )
                    })
                }
            </div>
            <InfoBar
                cls={state.isOpen ? 'ib _open' : 'ib'}
                infoBar={state.infoBar}
                news={state.news}
                closeInfoBar={closeInfoBar}
                updateInfoBar={updateInfoBar}
            />
        </>
    )
}
