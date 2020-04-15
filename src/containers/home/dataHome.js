import React from 'react'
import imgCarina from '@img/logo-carina.png'
import imgZafira from '@img/logo-zafira.png'
import tab1 from '@img/tab-1.png'
import tab2 from '@img/tab-2.png'
import tab3 from '@img/tab-3.png'
import tab4 from '@img/tab-4.png'
import tab5 from '@img/tab-5.png'
import { BVideo } from '@c-b/b-video/BVideo'
import { BStat } from '@c-b/b-stat/BStat'
import jenkins from '@img/logo-jenkins.png'
import fiverr from '@img/logo-fiver.png'
import sonar from '@img/logo-sonar.png'
import qps from '@img/logo-qps.png'

export const DataCards = [
    {
        logo: jenkins,
        title: 'Jenkins',
        color: '#29168A',
        social: [
            { icon: 'git', href: 'https://...' },
            { icon: 'telegram', href: 'https://...' },
            { icon: 'web', href: 'https://...' },
        ],
        news: 1,
    },
    {
        logo: fiverr,
        title: 'Zafira',
        color: '#17D69C',
        social: [
            { icon: 'git', href: 'https://...' },
            { icon: 'telegram', href: 'https://...' },
            { icon: 'web', href: 'https://...' },
        ],
        news: 2,
    },
    {
        logo: sonar,
        title: 'Sonar',
        color: '#70BFFE',
        social: [
            { icon: 'git', href: 'https://...' },
            { icon: 'telegram', href: 'https://...' },
            { icon: 'web', href: 'https://...' },
        ],
    },
    {
        logo: qps,
        title: 'Selenium Hub',
        color: '#D04678',
        social: [
            { icon: 'git', href: 'https://...' },
            { icon: 'telegram', href: 'https://...' },
            { icon: 'web', href: 'https://...' },
        ],
    },
    {
        logo: qps,
        title: 'Selenium Hub',
        color: '#D04678',
        social: [
            { icon: 'git', href: 'https://...' },
            { icon: 'telegram', href: 'https://...' },
            { icon: 'web', href: 'https://...' },
        ],
    },
]

export const DataNews = {
    top: {
        title: 'Zafira News',
        text: 'Here is the latest news of Zafira project. Stay in touch.',
        logo: fiverr,
    },
    info: [
        {
            title: 'Lorem ipsum dolor sit amet',
            date: '11/3/2019',
            show: BVideo,
            text: () => (
                <>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                </>
            ),
        },
        {
            title: 'Lorem ipsum dolor sit amet dretse jufgerts gioiosd',
            date: '09/3/2019',
            show: BStat,
            text: () => (
                <>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                </>
            ),
        },
    ],
}

export const DataUpdate = {
    top: {
        title: 'Sonar Updates',
        text:
            'Here is the latest updates of Zafira project. We’re recomended to update',
        logo: sonar,
    },
    info: [
        {
            title: 'Update from',
            date: '11/3/2019',
            text: () => (
                <>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                    <h4>What's new?</h4>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>
                            Nullam dictum adipiscing elementum, gravida diam.
                        </li>
                        <li>Aliquet aliquam vestibulum</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                        <li>
                            Nullam risus laoreet bibendum consectetur nec erat.
                        </li>
                    </ul>
                    <h4>What's improvew?</h4>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>
                            Nullam dictum adipiscing elementum, gravida diam.
                        </li>
                        <li>Aliquet aliquam vestibulum</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                    </ul>
                    <h4>What's plan?</h4>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>
                            Nullam dictum adipiscing elementum, gravida diam.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Update from',
            date: '09/3/2019',
            text: () => (
                <>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                        dictum adipiscing elementum, gravida diam. Aliquet
                        aliquam vestibulum, elementum ac fringilla cursus et
                        lacus ipsum. Nullam risus laoreet bibendum consectetur
                        nec erat.
                    </p>
                </>
            ),
        },
    ],
}
