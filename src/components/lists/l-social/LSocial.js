import React from 'react'
import {Icon} from '@c-ui/icons/Icon';
import {PropTypes} from 'prop-types';

const LSocial = ({list}) => {

    return (
        <div className="l-social">
            <ul className="l-social__list">
                {
                    list.map((item, i) => {
                        return  (
                            <li className="l-social__item" key={i}>
                                <a className="l-social__link" href={item.href} onClick={e => e.stopPropagation()}>
                                    <Icon name={item.icon} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

LSocial.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export {LSocial}




