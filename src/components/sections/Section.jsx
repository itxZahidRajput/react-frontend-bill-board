import React from 'react'

function Section() {
    return (
        <section className="section_main">
            <img className='image1' src="bg-main.jpg" />
            <img className='image2' src="w-bg.png" />
            <img className='image3' src="Busan.png" />
            <div className="catagry-m">
                <div className='cat-head'>
                    <h1 className='main_heading'>Find Your <span className="billboard">Billboard</span></h1>
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
                        <div>
                            <select className='inner' name="month" id="month">
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                            </select>
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
                            <span> Search</span>
                        </div>
                    </div>
                </div>
                <div className='row_items'>
                    <h1 className='pop'>Popular searches:</h1>
                    <a href='#' className='items'>
                        price
                    </a>
                    <a href='#' className='items'>
                        Location
                    </a>
                    <a href='#' className='items'>
                        Model
                    </a>
                    <a href='#' className='items'>
                        Model Year
                    </a>
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