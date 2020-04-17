import React from 'react'
import { Icon } from '@sh/icons/Icon'
import { PropTypes } from 'prop-types'

const InfoBar = ({ isOpen, messages, messagesAmount, closeInfoBar }) => {
    return (
        <div
            className={isOpen ? 'ib _open' : 'ib'}
            onClick={() => closeInfoBar()}
        >
            <div className="ib__inner" onClick={(e) => e.stopPropagation()}>
                <div className="ib__head">
                    <button
                        className="ib__btn-close"
                        type="button"
                        onClick={() => closeInfoBar()}
                    >
                        <Icon name="cross" />
                    </button>
                    <h2 className="ib__msg">
                        Notifications (
                        <span className="ib__msg-qty">{messagesAmount}</span>)
                    </h2>
                </div>
                {messages && (
                    <div className="ib__content">
                        <div className="ib__get">
                            {messages.map((item, i) => {
                                return (
                                    <div className="ib__item" key={i}>
                                        <div className="ib__item-top">
                                            <h2 className="ib__item-title">
                                                {item.title}
                                            </h2>
                                            <span className="ib__item-date">
                                                {item.date}
                                            </span>
                                        </div>
                                        {item.show && (
                                            <div className="ib__item-show">
                                                {item.show()}
                                            </div>
                                        )}
                                        <div className="ib__item-text">
                                            {item.text && item.text()}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

InfoBar.propTypes = {
    isOpen: PropTypes.bool,
    messages: PropTypes.array,
    messagesAmount: PropTypes.number,
    closeInfoBar: PropTypes.func.isRequired,
}

export { InfoBar }
