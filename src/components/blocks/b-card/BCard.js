import React from 'react'
import { LSocial } from '@c/lists/l-social/LSocial'
import { PropTypes } from 'prop-types'

const BCard = ({ card }) => {
    return (
        <div className="b-card">
            <LSocial list={card.social} />
            <a className="b-card__inner" href={card.href} target="_blank">
                <div className="b-card__content">
                    <div className="b-card__img">
                        <img
                            src={card.logo}
                            alt={`logo-${card.logo}`}
                            data-object-fit="contain"
                        />
                    </div>
                    <h1 style={{ color: card.color }}>{card.title}</h1>
                </div>
            </a>
        </div>
    )
}

BCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export { BCard }
