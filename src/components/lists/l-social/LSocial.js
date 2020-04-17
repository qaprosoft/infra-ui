import React from 'react'
import { Icon } from '@sh/icons/Icon'
import { PropTypes } from 'prop-types'

const LSocial = ({ list }) => {
    return (
        <ul className="l-social">
            {list.map((item, i) => {
                return (
                    <li className="l-social__item" key={i}>
                        <a
                            className="l-social__link"
                            href={item.href}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Icon name={item.icon} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

LSocial.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export { LSocial }
