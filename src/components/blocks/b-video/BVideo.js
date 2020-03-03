import React from 'react'
import bgVideo from '@img/bg-video.jpg'

export const BVideo = () => {

    return (
        <div className="b-video">
            <div className="b-video__inner">
                <img src={bgVideo} alt='background for video' data-object-fit='cover' />
            </div>
        </div>
    )
}