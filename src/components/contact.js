import React, { useState, useEffect } from 'react';
import Image from '../resources/bg1.jpg'
import Image2 from '../resources/img1.jpg'


const Contact = ()=>{
    return (
        <>
            <div>
                <div className='over'></div>
                <img src={Image} className="over2" />
                <div className='infoHolder'>
                    <div>
                    <h1 className='heading2'>
                        contact us
                    </h1>
                    <div className='info'>
                        <div className='hw'>Email</div>
                        <div className='bw'>abcd@gmail.com</div>
                        <div className='hw'>Phone no</div>
                        <div className='bw'>+91 9876 543 210</div>
                    </div>
                    </div>
                    

                </div>
               
            </div>
        </>
    )
}

export default Contact