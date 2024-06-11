import React from 'react'
import './section.css'

function Section() {
    return (
        <section className="section_main">
            <img className='image1' src="bg-main.jpg"  />
            <img className='image2' src="w-bg.png"  />
            <img className='image3' src="Busan.png"  />
            <div className="catagry-m">
                <div className='cat-head'>
                    <h1 className='main_heading'>Find Your <span className="bollboard">Billboard</span></h1>
                    <p className="text">Find and book unique Billboard on Rentals</p>
                </div>

                <div className="cat-card">
                    <div className='secsmall'>
                        <div className="main_small">
                            <h1 className='catagory'>
                                Categories
                            </h1>
                            <p className='catagory_p'> select catagory</p>
                        </div>
                    </div>
                    <div className='secsmall'>
                        <div className="main_small">
                            <h1 className='catagory'>
                                Duration
                            </h1>
                            <p className='catagory_p'> 24 hours</p>

                        </div>
                        <div className='inner'>
                            <span>math</span>
                            <img className='vector' src="Vector.png" alt="" />
                        </div>
                    </div>
                    <div className='secsmall'>
                        <div className="main_small">
                            <h1 className='catagory'>
                                More Locations
                            </h1>
                            <p className='catagory_p'> Search Location</p>

                        </div>
                        <div className='inner'>
                            <img src="search.png" alt="" />
                            <span > search</span>
                        </div>
                    </div>
                </div>
                <div className='row_items'>
                    <h1 className='pop'>Popular searches:</h1>
                    <div className='items'>
                        price
                    </div>
                    <div className='items'>
                        Location
                    </div>
                    <div className='items'>
                        Model
                    </div>
                    <div className='items'>
                        Model Year
                    </div>
                </div>
                <div className='para'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section