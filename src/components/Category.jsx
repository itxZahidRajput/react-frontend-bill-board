import React from "react"

export default function Category() {

    const categories = [{
        img: "img1.png",
        title: "Mobile Billboards"
    },
    {
        img: "img2.png",
        title: "Pole billboard"
    },
    {
        img: "img3.png",
        title: "Digital Billboards"
    },
    {
        img: "img4.png",
        title: "Attractive Billboards"
    },
    {
        img: "img5.png",
        title: "Building Billboards"
    },
    {
        img: "img6.png",
        title: "Roundabout Billboard"
    },
    {
        img: "img7.png",
        title: "Bus Billboard"
    },
    {
        img: "img8.png",
        title: "Bus Shelters"
    },
    {
        img: "img9.png",
        title: "Street Billboards"
    },
    {
        img: "img10.png",
        title: "360 Billboards"
    }]

    const categortElements = categories.map((category, index) => (
        <div key={index} onClick={toggle} className="category-card">
            <img src={category.img} />
            <p>{category.title}</p>
        </div>
    ))

    function toggle(event) {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.classList.remove('category-card-active');
        });
        event.currentTarget.classList.add('category-card-active');
    }



    return (
        <section className="category">
            <div className="category-title">
                <h3>Choose Categories</h3>
                <p>Take a look at the best Billboard Category</p>
            </div>
            <div className="category-block">
                {categortElements}
            </div>
        </section>
    )
}