import React, {useState} from 'react';
import {PropTypes} from 'prop-types';

const BTabsInfo = ({props}) => {

    const [active, setActive] = useState(0);

    return (
        <div className='b-tabsInfo'>
            <div className='b-tabsInfo__tabs'>
                <div className='b-tabsInfo__nav'>
                    {
                        props.tabs.map((item, i) => {
                            return (
                                <button
                                    className={`b-tabsInfo__btn${active === i ? ' _active' : ''}`}
                                    key={i}
                                    onClick={() => setActive(i)}
                                >
                                    {item}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className='b-tabsInfo__content'>
                <div className='b-tabsInfo__item'>
                    {
                        props.info(active)
                    }
                </div>
            </div>
        </div>
    )
}

BTabsInfo.propTypes = {
    props : PropTypes.object.isRequired
}

export {BTabsInfo}




