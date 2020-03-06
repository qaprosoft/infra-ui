import React from 'react'
import {Icon} from '@c-ui/icons/Icon';
import {PropTypes} from 'prop-types';

const InfoBar = ({cls, infoBar, news, closeInfoBar, updateInfoBar}) => {

    return (
        <div className={cls} onClick={() => closeInfoBar()}>
            <div className="ib__inner" onClick={(e) => e.stopPropagation()}>
                <div className="ib__head">
                    <button
                        className="ib__btn-close"
                        type="button"
                        onClick={() => closeInfoBar()}
                    >
                        <Icon name="cross"/>
                    </button>
                </div>
                <div className="ib__content">
                    <div className="ib__top">
                        <div className="ib__top-inner">
                            <div className="ib__img">
                                <img src={infoBar.top.logo} alt={`logo-${infoBar.top.logo}`} data-object-fit='contain' />
                            </div>
                            <div className="ib__info">
                                <h1 className="ib__title">{infoBar.top.title}</h1>
                                <p className="ib__text">{infoBar.top.text}</p>
                            </div>
                        </div>
                        {
                            !news && <button
                                className="ib__btn-update"
                                type="button"
                                onClick={() => updateInfoBar()}
                            >
                                Update now
                            </button>
                        }
                    </div>
                    <div className="ib__get">
                        {
                            infoBar.info.map((item, i) => {
                                return  (
                                    <div className="ib__item" key={i}>
                                        <div className="ib__item-top">
                                            <h2 className="ib__item-title">{item.title}</h2>
                                            <span className="ib__item-date">{item.date}</span>
                                        </div>
                                            {
                                                item.show && <div className="ib__item-show">{item.show()}</div>
                                            }
                                        <div className="ib__item-text">
                                            {
                                                item.text && item.text()
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoBar.propTypes = {
    cls: PropTypes.string.isRequired,
    infoBar: PropTypes.object.isRequired,
    news: PropTypes.number,
    closeInfoBar: PropTypes.func.isRequired,
    updateInfoBar: PropTypes.func.isRequired
}

export {InfoBar}