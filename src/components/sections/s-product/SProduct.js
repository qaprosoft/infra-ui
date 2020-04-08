import React from 'react'
import { BTabsInfo } from '@c-b/b-tabsInfo/BTabsInfo'
import { BTabsShow } from '@c-b/b-tabsShow/BTabsShow'
import { PropTypes } from 'prop-types'

const SProduct = ({ top, tabsInfo, tabsShow }) => {
    return (
        <div className="s-product">
            <div className="container">
                <div className="s-product__inner">
                    <div className="s-product__part _info">
                        <div className="s-product__top">
                            <div className="s-product__img">
                                <img
                                    src={top.img.src}
                                    alt={top.img.alt}
                                    data-object-fit="contain"
                                />
                            </div>
                            <div className="s-product__info">
                                <h1 className="s-product__title">
                                    {top.title}
                                </h1>
                                <p className="s-product__text">{top.text}</p>
                            </div>
                        </div>
                        <div className="s-product__part-content">
                            <BTabsInfo props={tabsInfo} />
                        </div>
                    </div>
                    <div className="s-product__part _show">
                        <BTabsShow props={tabsShow} />
                    </div>
                </div>
            </div>
        </div>
    )
}

SProduct.propTypes = {
    top: PropTypes.object.isRequired,
    tabsInfo: PropTypes.object.isRequired,
    tabsShow: PropTypes.object.isRequired,
}

export { SProduct }
