import React from 'react'
import { Icon } from '@sh/icons/Icon'
import { PropTypes } from 'prop-types'

const Header = ({ unreadMsgAmount, openInfoBar }) => (
    <header className="h">
        <div className="container">
            <div className="h__inner">
                <div className="h__item">
                    <Icon name="qps" />
                </div>
                <div className="h__item _center">
                    <Icon name="logo" />
                </div>
                <div
                    className="h__note"
                    onClick={() => openInfoBar(unreadMsgAmount)}
                >
                    <Icon name="bill" />
                    {unreadMsgAmount && (
                        <span className="h__note-qty">{unreadMsgAmount}</span>
                    )}
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    unreadMsgAmount: PropTypes.number,
    openInfoBar: PropTypes.func.isRequired,
}

export { Header }
