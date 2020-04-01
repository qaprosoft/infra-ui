import React from 'react'
import {LSocial} from '@c/lists/l-social/LSocial';
import {PropTypes} from 'prop-types';
import {Icon} from '@sh/icons/Icon';

const BCard = ({card, openInfoBar}) => {

    return (
        <div className="b-card" onClick={() => openInfoBar(card.news)}>
            <div className="b-card__inner">
                <div className="b-card__top">
                    <LSocial list={card.social}/>
                    {
                        card.news && (

                            <div className="b-card__note">
                                <Icon name="bill" />
                                <span className="b-card__qty">{card.news}</span>
                            </div>
                        )
                    }
                </div>
                <div className="b-card__content">
                    <div className="b-card__img">
                        <img src={card.logo} alt={`logo-${card.logo}`} data-object-fit='contain' />
                    </div>
                    <h1 style={{color:card.color}}>{card.title}</h1>
                </div>
            </div>
        </div>
    )
}

BCard.propTypes = {
    card : PropTypes.object.isRequired,
    openInfoBar : PropTypes.func.isRequired
}

export {BCard}



