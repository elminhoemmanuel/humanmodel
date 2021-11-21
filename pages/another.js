import Head from 'next/head'
import React, { useState, useEffect } from 'react'


export default function Home() {

    const [switcher, setSwitcher] = useState(true)
    return (
        <>
            <Head>
                <title>Test</title>
                <meta name="keywords" content="Test" />
            </Head>

            <div className='py-52 relative px-80'>
                <div className="person">
                    <div className="person-one">
                        <figure className="head"></figure>
                        <figure className="body"></figure>
                    </div>
                    {/* <div class="person-two">
                        <figure class="head"></figure>
                        <figure class="body"></figure>
                    </div> */}
                </div>
            </div>
        </>
    )
}
