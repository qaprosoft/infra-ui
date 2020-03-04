import React, {useState} from 'react';
import {PropTypes} from 'prop-types';

const BTabsShow = ({props}) => {

    const [active, setActive] = useState(0);
    const show = props.show[active];

    return (
        <div className='b-tabsShow'>
            <div className='b-tabsShow__content'>
                <div className='b-tabsShow__item'>
                    {
                        show && show()
                    }
                </div>
            </div>
            <div className='b-tabsShow__nav'>
                {
                    props.tabs.map((item, i) => {
                        return (
                            <button
                                className={`b-tabsShow__btn${active === i ? ' _active' : ''}`}
                                key={i}
                                onClick={() => setActive(i)}
                            >
                                <img src={item.src} alt={item.alt} data-object-fit='cover' />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

BTabsShow.propTypes = {
    props : PropTypes.object.isRequired
}

export {BTabsShow}
