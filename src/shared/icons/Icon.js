import React from 'react'
import icons from '@img/_set.svg'

export const Icon = ({name}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            className={`icon icon-${name}`}>
            <use xlinkHref={`${icons}#${name}`} />
        </svg>
    )
}
