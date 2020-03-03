import React, {useState} from 'react';

export const BTabsShow = ({props}) => {

    const [active, setActive] = useState(0);

    return (
        <div className='b-tabsShow'>

            <div className='b-tabsShow__content'>
                <div className='b-tabsShow__item'>
                    {
                        console.log('--------000000', props)
                       // props.children[active]
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




