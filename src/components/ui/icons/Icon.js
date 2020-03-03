import React from 'react'
import icons from '@img/_set.svg'

export const Icon = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            className={`icon icon-${props.name}`}>
            <use xlinkHref={`${icons}#${props.name}`} />
        </svg>
    )
}
