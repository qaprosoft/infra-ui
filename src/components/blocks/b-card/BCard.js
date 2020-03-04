import React from 'react'
import {LSocial} from '@c/lists/l-social/LSocial';
import {PropTypes} from 'prop-types';

const BCard = ({card}) => {

    return (
        <div className="b-card">
            <div className="b-card__inner">
                <div className="b-card__top">
                    <LSocial list={card.social}/>
                </div>
                <div className="b-card__content">
                    <div className="b-card__img">
                        <img src={card.logo} alt={`logo-${card.logo}`} data-object-fit='contain' />
                    </div>
                    <h1>{card.title}</h1>
                </div>
            </div>
        </div>
    )
}

BCard.propTypes = {
    card : PropTypes.object.isRequired
}

export {BCard}



