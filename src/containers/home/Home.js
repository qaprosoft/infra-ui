import React from 'react'
import {DataProducts} from '@cnt/home/dataHome';
import {SProduct} from '@c-s/s-product/SProduct';

export const Home = () => {

    return (
        <>
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




