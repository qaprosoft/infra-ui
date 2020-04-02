import React from 'react'
import bgVideo from '@img/bg-video.jpg'
import { Icon } from '@sh/icons/Icon'

export const BVideo = () => {
    return (
        <div className="b-video">
            <div className="b-video__inner">
                <img
                    src={bgVideo}
                    alt="background for video"
                    data-object-fit="cover"
                />

                <button className="btn-play" type="button">
                    <Icon name="play" />
                </button>
            </div>
        </div>
    )
}
