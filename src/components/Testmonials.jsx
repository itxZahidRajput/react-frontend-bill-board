import React, { useState } from 'react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const testimonials = [
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
            clientName: "Hone Doe",
            location: ""
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
            clientName: "Denise, CA",
            location: ""
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
            clientName: "Denise, CA",
            location: ""
        }
    ]

    const testimonialElement = testimonials.map((testimonial, index) => (
        <div key={index} className='testimonial-card'>
            <div className={`testimonial-card-content ${index === activeIndex ? 'active' : ''}`}>
                {testimonial.content}
            </div>
            <div className='testimonial-client'>
                <img src={`img${index + 19}.png`} alt={`Client ${index + 1}`} />
                <p>{testimonial.clientName}</p>
                <p>{testimonial.location}</p>
            </div>
        </div>
    ))

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className='testimonial'>
            <div className='testimonial-title'>
                <h4>What Our Clients Say About Us</h4>
            </div>
            <div className='testimonial-navigation'>
                <img onClick={prevTestimonial} src="img16.png" alt="Navigation Icon 1" />
                <img src="img18.png" alt="Navigation Icon 2" />
                <img onClick={nextTestimonial} src="img17.png" alt="Navigation Icon 3" />
            </div>
            <div className='testimonial-block'>
                {testimonialElement}
            </div>
            <div className='testimonial-divider'>
                <img src="img22.png" alt="" />
            </div>
        </section>
    )
}
