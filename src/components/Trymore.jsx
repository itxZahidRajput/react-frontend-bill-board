import React from 'react';
import './Trymore.css';
const Trymore = () => {
    return (
        <section className="t-main">
            <img className='img-1' src="t-1.jpg" alt="" />
            <img className='img-2' src="t-2.png" alt="" />
            <div className="t-child">
                <h1>Try More</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Morbi vehicula lectus id.
                </p>
                <button>
                    Learn more
                </button>
            </div>
        </section>
    );
}
export default Trymore;
