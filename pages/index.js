import Head from 'next/head'
import React, { useState, useEffect } from 'react'


export default function Home() {

    const [switcher, setSwitcher] = useState("male")

    const [neckW, setNeckW] = useState("20%")
    const [neckL, setNeckL] = useState("20%")
    const [faceType, setFaceType] = useState("45%");
    const [torsoW, setTorsoW] = useState("80%");
    const [torsoH, setTorsoH] = useState("40%");


    return (
        <>
            <Head>
                <title>Test</title>
                <meta name="keywords" content="Test" />
            </Head>

            <div className=''>
                {/* <div className='p-4'>
                    <button className='px-5 py-2 bg-blue-700 text-white rounded mr-4' onClick={() => { setSwitcher("male") }}>Male</button>
                    <button className='px-5 py-2 bg-blue-700 text-white rounded' onClick={() => { setSwitcher("female") }}>Female</button>
                </div>
                <div>

                    {
                        switcher === "male" ?

                            <iframe src="https://clara.io/embed/d49ee603-8e6c-4720-bd20-9e3d7b13978a?renderer=webgl&hideLogo=true"
                                width="100%" height="600" allowfullscreen >

                            </iframe> :

                            <iframe src="https://clara.io/embed/3832af86-0c6c-4909-a17e-e95ff48312e7?renderer=webgl&hideLogo=true" width="800" height="600" allowfullscreen>

                            </iframe>
                    }

                </div> */}
                <h2 className="px-6 py-3 font-bold text-2xl">Customize the human figure by choosing your fit</h2>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 mb-4 gap-4">
                    <select onChange={(e)=>{setNeckW(e.target.value)}}  className="block rounded-lg border border-gray-500 p-3">
                        <option>Select Neck width</option>
                        <option value="15%" >SM</option>
                        <option value="20%">M</option>
                        <option value="30%">L</option>
                        <option value="35%">XL</option>
                    </select>
                    <select onChange={(e)=>{setFaceType(e.target.value)}}  className="block rounded-lg border border-gray-500 p-3">
                        <option>Select Face Type</option>
                        <option value="35%" >Slim</option>
                        <option value="45%">Normal</option>
                        <option value="55%">Broad</option>
                    </select>
                    <select onChange={(e)=>{setTorsoW(e.target.value)}}  className="block rounded-lg border border-gray-500 p-3">
                        <option>Select Torso Width</option>
                        <option value="60%" >SM</option>
                        <option value="70%">M</option>
                        <option value="80%">L</option>
                        <option value="90%">XL</option>
                    </select>
                    <select onChange={(e)=>{setTorsoH(e.target.value)}}  className="block rounded-lg border border-gray-500 p-3">
                        <option>Select Torso Length</option>
                        <option value="30%" >SM</option>
                        <option value="40%">M</option>
                        <option value="60%">L</option>
                    </select>
                </div>

                <div id="cartoon" role="img" aria-labelledby="description">
                    <div style={{width:`${torsoW}`, height:`${torsoH}`}} class="body"></div>
                    <div style={{width:`${neckW}`, height:`${neckL}`}} class="neck"></div>
                    {/* <div class="hair-back"></div> */}
                    <div style={{width:`${faceType}`}} class="face"></div>
                    {/* <div class="hair-top"></div> */}
                </div>
            </div>
        </>
    )
}
