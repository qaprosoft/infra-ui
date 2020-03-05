import React from 'react'
import {DataProducts, DataCards} from '@cnt/home/dataHome';
import {SProduct} from '@c-s/s-product/SProduct';
import {SCards} from '@c-s/s-cards/SCards';

export const Home = ({openInfoBar}) => {

    return (
        <>
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
        </>
    )
}
