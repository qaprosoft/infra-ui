import React from 'react'
import {DataProducts} from '@cnt/home/dataHome';
import {DataCards} from '@cnt/home/dataHome';
import {SProduct} from '@c-s/s-product/SProduct';
import {SCards} from '@c-s/s-cards/SCards';

export const Home = () => {

    return (
        <>
            <SCards cards={DataCards}/>
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




