import React from 'react';
import drop from '../../assets/Vector 73.png'
import location from '../../assets/location.png'
import store from '../../assets/play-store.png'
import buy from '../../assets/Vector (4).png'
import shape1 from '../../assets/Vector (2).png'
import shape2 from '../../assets/Vector (3).png'


const Navbar = () => {
    return (
        <div className='px-10 py-2 bg-[#F6F6F6]'>
            <div className='flex items-center gap-10 '>
                <div>
                    <img className='-mb-5 ml-7 ' src={shape1} alt="" />
                    <img  className='-mb-3 ml-16' src={shape2} alt="" />
                    <h1 className='text-3xl'>
                        <span className='text-yellow-300'>oye</span><span>b</span><span>usy</span>
                    </h1>
                    <p className='uppercase text-xs'>Book your services</p>
                </div>

                <div className='flex items-center'>
                    <img src={location} alt="" />
                    1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
                    <img  className='ml-2' src={drop} alt="" />
                </div>

                <div className='flex items-center gap-10 font-semibold'>
                    <p>Blog</p>
                    <p>Carrier</p>

                    <p className='flex items-center'>My account
                        <img className='ml-2' src={drop} alt="" />
                    </p>

                        <img src={buy} alt="" />

                    <div className='ml-3 border p-3'>
                        <div className='flex items-center'>
                            <img className='w-6 h-6 mr-3' src={store} alt="" />
                            <p>Download App</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;