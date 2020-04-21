import React from 'react'
import { LSocial } from '@c/lists/l-social/LSocial'
import { PropTypes } from 'prop-types'

const randomColor = () => {
    const colors = ['#29168A', '#17D69C', '#70BFFE', '#D04678']
    const random = Math.random()
    if (random <= 0.25) {
        return colors[0]
    }
    if (random > 0.75) {
        return colors[1]
    }
    if (random > 0.25 && random <= 0.5) {
        return colors[2]
    }
    return colors[3]
}

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
                    <h1 style={{ color: randomColor() }}>{card.name}</h1>
                </div>
            </a>
        </div>
    )
}

BCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export { BCard }
