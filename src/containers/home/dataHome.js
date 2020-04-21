import React from 'react'
import { BVideo } from '@c-b/b-video/BVideo'
import { BStat } from '@c-b/b-stat/BStat'
import sonar from '@img/logo-sonar.png'

export const DataCards = [
    {
        name: 'QTEST',
        icon: '',
        url: 'nlnlknlknm',
    },
    {
        name: 'JIRA',
        icon: '',
        url: 'https://solvd.atlassian.net',
    },
    {
        name: 'Jenkins bas2',
        icon: '',
        url: 'http://wrongurl.com',
    },
    {
        name: 'JENKINS',
        icon: '',
        url: 'https://ci.qaprosoft.farm',
    },
    {
        name: 'SELENIUM',
        icon: '',
        url: 'https://hub.zebrunner.com/wd/hub',
    },
    {
        name: 'ZEBRUNNER',
        icon: '',
        url: 'https://hub.zebrunner.com/wd/hub-1',
    },
    {
        name: 'BROWSERSTACK',
        icon: '',
        url: 'https://hub-cloud.browserstack.com/wd/hub',
    },
]

export const Messages = [
    {
        title: 'Lorem ipsum dolor sit amet',
        date: '11/3/2019',
        show: BVideo,
        text: () => (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                    dictum adipiscing elementum, gravida diam. Aliquet aliquam
                    vestibulum, elementum ac fringilla cursus et lacus ipsum.
                    Nullam risus laoreet bibendum consectetur nec erat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                    dictum adipiscing elementum, gravida diam. Aliquet aliquam
                    vestibulum, elementum ac fringilla cursus et lacus ipsum.
                    Nullam risus laoreet bibendum consectetur nec erat.
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
                    dictum adipiscing elementum, gravida diam. Aliquet aliquam
                    vestibulum, elementum ac fringilla cursus et lacus ipsum.
                    Nullam risus laoreet bibendum consectetur nec erat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae ut arcu aliquam suspendisse enim commodo. Nullam
                    dictum adipiscing elementum, gravida diam. Aliquet aliquam
                    vestibulum, elementum ac fringilla cursus et lacus ipsum.
                    Nullam risus laoreet bibendum consectetur nec erat.
                </p>
            </>
        ),
    },
]

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
