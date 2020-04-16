import React from 'react'
import { Icon } from '@sh/icons/Icon'
import { PropTypes } from 'prop-types'

const Header = ({ messagesAmount, openInfoBar }) => (
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
                    onClick={() => openInfoBar(messagesAmount)}
                >
                    <Icon name="bill" />
                    {messagesAmount && (
                        <span className="h__note-qty">{messagesAmount}</span>
                    )}
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    messagesAmount: PropTypes.number,
    openInfoBar: PropTypes.func.isRequired,
}

export { Header }
