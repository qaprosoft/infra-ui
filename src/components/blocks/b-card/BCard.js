import React from 'react'
import { LSocial } from '@c/lists/l-social/LSocial'
import { PropTypes } from 'prop-types'

const BCard = ({ card }) => {
    return (
        <div className="b-card">
            <a className="b-card__inner" href={card.url} target="_blank">
                <div className="b-card__content">
                    <div className="b-card__img">
                        <img
                            src={card.icon}
                            alt={`logo-${card.name}`}
                            data-object-fit="contain"
                        />
                    </div>
                    <h1>{card.name}</h1>
                </div>
            </a>
        </div>
    )
}

BCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export { BCard }
