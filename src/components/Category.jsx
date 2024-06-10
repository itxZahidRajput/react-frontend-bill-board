import React from "react"

export default function Category() {
    return (
        <section className="category">
            <div className="category-title">
                <h3>Choose Categories</h3>
                <p>Take a look at the best Billboard Category</p>
            </div>
            <div className="category-block">
                <div className="category-card category-card-active">
                    <img src="img1.png" />
                    <p>Mobile Billboards</p>
                </div>
                <div className="category-card">
                    <img src="img2.png" />
                    <p>Pole billboard</p>
                </div>

                <div className="category-card">
                    <img src="img3.png" />
                    <p>Digital Billboards</p>
                </div>

                <div className="category-card">
                    <img src="img4.png" />
                    <p>Attractive Billboards</p>
                </div>

                <div className="category-card">
                    <img src="img5.png" />
                    <p>Building Billboards</p>
                </div>
                <div className="category-card">
                    <img src="img6.png" />
                    <p>Roundabout Billboard</p>
                </div>
                <div className="category-card">
                    <img src="img7.png" />
                    <p>Bus Billboard</p>
                </div>
                <div className="category-card">
                    <img src="img8.png" />
                    <p>Bus Shelters</p>
                </div>
                <div className="category-card">
                    <img src="img9.png" />
                    <p>Street Billboards</p>
                </div>
                <div className="category-card">
                    <img src="img10.png" />
                    <p>360 Billboards</p>
                </div>
            </div>
        </section>
    )
}