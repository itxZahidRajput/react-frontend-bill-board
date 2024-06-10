import React from 'react';

export default function Testimonials() {
    return (
        <section className='testimonial'>
            <div className='testimonial-title'>
                <h4>What Our Clients Say About Us</h4>
            </div>
            <div className='testimonial-navigation'>
                <img src="img16.png" alt="Navigation Icon 1" />
                <img src="img18.png" alt="Navigation Icon 2" />
                <img src="img17.png" alt="Navigation Icon 3" />
            </div>
            <div className='testimonial-block'>
                <div className='testimonial-card testimonial-card-edge'>
                    <div className='testimonial-card-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
                    </div>
                    <div className='testimonial-client'>
                        <img src="img19.png" alt="Client 1" />
                        <p>Hone Doe</p>
                    </div>
                </div>

                <div className='testimonial-card'>
                    <div className='testimonial-card-content active'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
                    </div>
                    <div className='testimonial-client'>
                        <img src="img20.png" alt="Client 2" />
                        <p>Denise, CA</p>
                    </div>
                </div>

                <div className='testimonial-card testimonial-card-edge'>
                    <div className='testimonial-card-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
                    </div>
                    <div className='testimonial-client'>
                        <img src="img21.png" alt="Client 3" />
                        <p>Denise, CA</p>
                    </div>
                </div>
            </div>
            <div className='testimonial-divider'>
                <img src="img22.png" alt="" />
            </div>
        </section>
    )
}
