import React from 'react';
import imgCarina from '@img/logo-carina.png'
import imgZafira from '@img/logo-zafira.png'
import tab1 from '@img/tab-1.png'
import tab2 from '@img/tab-2.png'
import tab3 from '@img/tab-3.png'
import tab4 from '@img/tab-4.png'
import tab5 from '@img/tab-5.png'
import {BVideo} from '@c-b/b-video/BVideo'
import {BStat} from '@c-b/b-stat/BStat'
import jenkins from '@img/logo-jenkins.png'
import fiverr from '@img/logo-fiver.png'
import sonar from '@img/logo-sonar.png'
import qps from '@img/logo-qps.png'

export const DataCards = [
    {
        logo: jenkins,
        title: 'Jenkins',
        social: [{icon: 'git', href: 'https://...'}, {icon: 'telegram', href: 'https://...'}, {icon: 'web', href: 'https://...'}],
        news: 1
    },
    {
        logo: fiverr,
        title: 'Zafira',
        social: [{icon: 'git', href: 'https://...'}, {icon: 'telegram', href: 'https://...'}, {icon: 'web', href: 'https://...'}],
        news: 2
    },
    {
        logo: sonar,
        title: 'Sonar',
        social: [{icon: 'git', href: 'https://...'}, {icon: 'telegram', href: 'https://...'}, {icon: 'web', href: 'https://...'}]
    },
    {
        logo: qps,
        title: 'Selenium Hub',
        social: [{icon: 'git', href: 'https://...'}, {icon: 'telegram', href: 'https://...'}, {icon: 'web', href: 'https://...'}]
    },
    {
        logo: qps,
        title: 'Selenium Hub',
        social: [{icon: 'git', href: 'https://...'}, {icon: 'telegram', href: 'https://...'}, {icon: 'web', href: 'https://...'}]
    }
]

export const DataProducts = [
    {
        top: {
            title: 'Carina',
            text: 'Carina is a Java-based test automation framework that unites all testing layers: Mobile applications (web, native, hybrid), WEB applications, REST services, Databases.',
            img: {
                src: imgCarina,
                alt: 'carina-logo'
            }
        },
        tabsInfo: {
            tabs :['About Carina', 'BDD framework', 'Demo', 'Sample IOS', 'Sample Android'],
            info: (i) => {
                switch(i) {
                    case 0 :
                        return (
                            <>
                                <p>Carina framework is built on top of most popular open-source solutions like Selenium, Appium, TestNG allowing to reduce dependence on specific technology stack.</p>
                                <p>Carina supports all popular browsers (IE, Safari, Chrome, Firefox) and mobile devices (iOS/Android). Special feature for mobile domain: it reuses test automation code between IOS/Android up to 70-80%.</p>
                                <p>As far as our framework is built in Java, it is cross-platform. Tests may be easily executed both on Unix or Windows OS. All you need is JDK 8 installed.</p>
                                <p>Framework supports different types of databases - both relational and nonrelational (MySQL, SQL Server, Oracle, PostgreSQL), providing amazing experience of DAO layer implementation using MyBatis ORM framework.</p>
                                <p>API testing is based on Freemarker template engine. It enables great flexibility in generating REST requests and responses are dynamically changed by incoming arguments.</p>
                            </>
                        )
                    case 1 :
                        return (
                            <>
                                <h3>BDD Framework</h3>
                                <p>Carina framework is built on top of most popular open-source solutions like Selenium, Appium, TestNG allowing to reduce dependence on specific technology stack.</p>
                                <p>As far as our framework is built in Java, it is cross-platform. Tests may be easily executed both on Unix or Windows OS. All you need is JDK 8 installed.</p>
                            </>
                        )
                    default:
                        return null
                }
            }
        },
        tabsShow: {
            tabs : [
                {src: tab1, alt: 'img for tab1'},
                {src: tab2, alt: 'img for tab2'},
                {src: tab3, alt: 'img for tab3'},
                {src: tab4, alt: 'img for tab4'},
                {src: tab5, alt: 'img for tab5'}
            ],
            show: [BVideo, BStat]
        }
    },
    {
        top: {
            title: 'Zafira',
            text: 'Zafira is a central automation reporting system that is built on the top of Java Spring Framework.',
            img: {
                src: imgZafira,
                alt: 'zafira-logo'
            },
        },
        tabsInfo: {
            tabs : ['About Zafira', 'Zafira UI', 'Zafira Client', 'Postgres', 'Rabbitmq'],
            info: (i) => {
                switch(i) {
                    case 0 :
                        return (
                            <>
                                <p>Zafira is a central automation reporting system that is built on the top of Java Spring Framework. It dramatically increases the transparency of test automation results and provides better understanding of product quality. Qaprosoft team is developing Zafira based on more than 10-years expertise in quality assurance and we strongly believe that your QA/Dev engineers and managers will love it!</p>
                                <p>Zafira was initially designed to track automation progress of the tests written using <a href='https://www.carina-core.io/'>Carina automation framework</a> but you are capable to integrate Zafira client into your own automation tool. We are actively developing clients for different languages and frameworks but still looking for active community to provide better support.</p>
                            </>
                        )
                    case 1 :
                        return (
                            <>
                                <h3>Zafira UI</h3>
                                <p>Zafira was initially designed to track automation progress of the tests written using Carina automation framework but you are capable to integrate Zafira client into your own automation tool. We are actively developing clients for different languages and frameworks but still looking for active community to provide better support.</p>
                            </>
                        )
                    default:
                        return null
                }
            }
        },
        tabsShow: {
            tabs : [
                {src: tab1, alt: 'img for tab1'},
                {src: tab2, alt: 'img for tab2'},
                {src: tab3, alt: 'img for tab3'},
                {src: tab4, alt: 'img for tab4'},
                {src: tab5, alt: 'img for tab5'}
            ],
            show: [BVideo, BStat]
        }
    }
]

export const DataNews = {
    top: {
        title: 'Zafira News',
        text: 'Here is the latest news of Zafira project. Stay in touch.',
        logo: fiverr
    },
    info: [
        {
            title: 'Lorem ipsum dolor sit amet',
            date: '11/3/2019',
            show: BVideo,
            text: () => (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                </>
            )
        },
        {
            title: 'Lorem ipsum dolor sit amet dretse jufgerts gioiosd',
            date: '09/3/2019',
            show: BStat,
            text: () => (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                </>
            )
        }
    ]
}

export const DataUpdate = {
    top: {
        title: 'Sonar Updates',
        text: 'Here is the latest updates of Zafira project. We’re recomended to update',
        logo: sonar
    },
    info: [
        {
            title: 'Update from',
            date: '11/3/2019',
            text: () => (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                    <h4>What's new?</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                        <li>Aliquet aliquam vestibulum</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                        <li>Nullam risus laoreet bibendum consectetur nec erat.</li>
                    </ul>
                    <h4>What's improvew?</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                        <li>Aliquet aliquam vestibulum</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                    </ul>
                    <h4>What's plan?</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Update from',
            date: '09/3/2019',
            text: () => (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.</p>
                </>
            )
        }
    ]
}
