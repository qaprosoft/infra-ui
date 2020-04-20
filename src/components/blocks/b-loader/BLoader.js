import React from 'react'
import { Icon } from '@sh/icons/Icon'

export const BLoader = () => {
    return (
        <div className="b-loader">
            <div className="b-loader__inner">
                <svg className="b-loader__circular" viewBox="25 25 50 50">
                    <circle
                        className="b-loader__path"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke="#0076be"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    )
}
