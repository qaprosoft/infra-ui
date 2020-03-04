import React from 'react'
import {BCard} from '@c-b/b-card/BCard';
import {PropTypes} from 'prop-types';

const SCards = ({cards}) => {

    return (
        <div className="s-cards">
            <div className="container">
                <div className="s-cards__inner">
                    <div className="s-cards__list">
                        {
                            cards.map((item, i) => {
                                return  (
                                    <div className="s-cards__item" key={i}>
                                        <BCard card={item}/>
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

SCards.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export {SCards}


