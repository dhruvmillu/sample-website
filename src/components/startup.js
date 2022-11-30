import React, { useState, useEffect } from 'react';
import Image from '../resources/bg1.jpg'
import Image2 from '../resources/img1.jpg'

const StartUp = () => {
    return (
        <>
            <div>
                <div className='over'></div>
                <img src={Image} className="over2" />
                <div className='infoHolder'>
                    <div>
                    <h1 className='heading1'>
                        Who Are we?
                    </h1>
                    <p className='info'>
                    Superdry is built on style. We celebrate unique and independent style through our brands: Original & Vintage, Studios, CODE, Superdry X and Performance Sport. We’re always inspired by the spirit of adventure and crafting premium products sustainably.
                    </p>
                    </div>
                    <div>
                        <img src={Image2} height={600}  />
                    </div>
                    

                </div>
               
            </div>
        </>
    )
}

export default StartUp