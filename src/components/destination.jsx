import React from 'react';
import './destination.css';
export default function Destination() {
    return (
        <section className='sooter_section'>
            <div className='heading_main'>
                <div>
                    <h1 className='d_heading'>Choose Your Destination</h1>
                    <p className='d_para'>Take a look at the best places in the Work</p>
                </div>
                <span className='show_more'>
                    <span>Show More</span>
                    <img src="v-12.png" alt="" />
                </span>
            </div>
            <div className='images_flex'>
                <div className='images_sec'>
                    <div className='image_box'>
                        <img className="image_d" src="d-5.png" alt="" />
                    </div>
                    <h1 className='image_heading'>
                        Billboard
                    </h1>
                </div>
                <div className='images_sec'>
                    <div className='image_box'>
                        <img className="image_d" src="d-3.jpg" alt="" />
                    </div>
                    <h1 className='image_heading'>
                    Pole Billboard
                    </h1>
                </div>
                <div className='images_sec'>
                    <div className='image_box'>
                        <img className="image_d" src="d-2.jpg" alt="" />
                    </div>
                    <h1 className='image_heading'>
                    Street Billboard
                    </h1>
                </div>
                <div className='images_sec'>
                    <div className='image_box'>
                        <img className="image_d" src="d-1.jpg" alt="" />
                    </div>
                    <h1 className='image_heading'>
                    Road Billboard
                    </h1>
                </div>
            </div>
        </section>

    );
}