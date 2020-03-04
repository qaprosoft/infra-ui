import React from 'react'
import bgStat from '@img/stat.jpg'

export const BStat = () => {

    return (
        <div className="b-stat">
            <div className="b-stat__inner">
                <img src={bgStat} alt='background for stat' data-object-fit='cover' />
            </div>
        </div>
    )
}