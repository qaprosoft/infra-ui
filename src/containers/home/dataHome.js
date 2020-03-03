import React from 'react';
import imgCarina from '@img/logo-carina.png'
import imgZafira from '@img/logo-zafira.png'
import tab1 from '@img/tab-1.png'
import tab2 from '@img/tab-2.png'
import tab3 from '@img/tab-3.png'
import tab4 from '@img/tab-4.png'
import tab5 from '@img/tab-5.png'


// -------  data is array of objects to make sections {object equal section)  ------------

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
            id: 'carinaInfo',
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
                        return <>
                            <h3>BDD Framework</h3>
                            <p>Carina framework is built on top of most popular open-source solutions like Selenium, Appium, TestNG allowing to reduce dependence on specific technology stack.</p>
                            <p>As far as our framework is built in Java, it is cross-platform. Tests may be easily executed both on Unix or Windows OS. All you need is JDK 8 installed.</p>
                        </>
                    default:
                        return null
                }
            }
        },
        tabsShow: {
            tabs : [
                {
                    src: tab1,
                    alt: 'img for tab1'
                },
                {
                    src: tab2,
                    alt: 'img for tab2'
                },
                {
                    src: tab3,
                    alt: 'img for tab3'
                },
                {
                    src: tab4,
                    alt: 'img for tab4'
                },
                {
                    src: tab5,
                    alt: 'img for tab5'
                }
            ],
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
            id: 'zafiraInfo',
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
                        return <>
                            <h3>Zafira UI</h3>
                            <p>Zafira was initially designed to track automation progress of the tests written using Carina automation framework but you are capable to integrate Zafira client into your own automation tool. We are actively developing clients for different languages and frameworks but still looking for active community to provide better support.</p>
                        </>
                    default:
                        return null
                }
            }
        },
        tabsShow: {
            tabs : [
                {
                    src: tab1,
                    alt: 'img for tab1'
                },
                {
                    src: tab2,
                    alt: 'img for tab2'
                },
                {
                    src: tab3,
                    alt: 'img for tab3'
                },
                {
                    src: tab4,
                    alt: 'img for tab4'
                },
                {
                    src: tab5,
                    alt: 'img for tab5'
                }
            ],
        }
    }
]
