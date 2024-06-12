import React from "react";
import { useState } from "react"
import Breadcrumbs from "./layouts/Breadcrumbs";
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import "../assets/product-details.css";

export default function ProductDetail() {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
    const [showFullNumber, setShowFullNumber] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleFilterMenu = () => {
        setIsFilterMenuVisible(!isFilterMenuVisible);
    };

    const handleShowNumber = () => {
        setShowFullNumber(true);
    };

    const getPhoneNumberDisplay = () => {
        const phone = productDetail[0].contact;
        return showFullNumber ? phone : `${phone.slice(0, 3)}****${phone.slice(-2)}`;
    };

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const getTruncatedText = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + "...";
    };

    const truncatedText = getTruncatedText(description, 500);

    const gallery = [{
        image: "/detail/image1.png",
        alt: "Image 1"
    }, {
        image: "/detail/image2.png",
        alt: "Image 2"
    }, {
        image: "/detail/image3.png",
        alt: "Image 3"
    }, {
        image: "/detail/image4.png",
        alt: "Image 4"
    }]

    const galleryElement = gallery.map((item, index) => (
        <img src={item.image} alt={item.alt} key={index} />
    ))

    const reviews = [{
        image: "/detail/reviewer.png",
        name: "Elissa Goudal",
        rating: 5,
        date: "9/11/2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    }]

    const reviewElement = reviews.map((item, index) => (
        <>
            <div className="review" key={index}>
                <img src={item.image} className="reviewer-image" />
                <div className="review-content">
                    <h3>{item.name}</h3>
                </div>
            </div>
            <div className="rating">
                <p>⭐⭐⭐⭐⭐({item.rating})</p>
                <p>{item.date}</p>
            </div>
            <p className="review-content">{item.content}
            </p>
        </>
    ))

    const relatedProducts = [{
        image: "/detail/product.png",
        title: "Clock Tower Bill Board",
        duration: "2 Months",
        view: "5650",
        size: "36' x 60'",
        location: "LHR, PK",
        price: "249",
        updated: "Updated 24 hours ago"
    },
    {
        image: "/detail/product.png",
        title: "Clock Tower Bill Board",
        duration: "2 Months",
        view: "5650",
        size: "36' x 60'",
        location: "LHR, PK",
        price: "249",
        updated: "Updated 24 hours ago"
    },
    {
        image: "/detail/product.png",
        title: "Clock Tower Bill Board",
        duration: "2 Months",
        view: "5650",
        size: "36' x 60'",
        location: "LHR, PK",
        price: "249",
        updated: "Updated 24 hours ago"
    }
    ]

    const relatedProductsElement = relatedProducts.map((item, index) => (
        <div class="card">
            <img src={item.image} alt="Billboard" class="card-image" />
            <div class="card-content">
                <h3 class="card-title">{item.title}</h3>
                <div class="card-details">
                    <div class="detail-item">
                        <img src="/img12.png" alt="Duration" class="detail-icon" />
                        <span class="card-key">Duration</span>
                        <span class="card-props">{item.duration}</span>
                    </div>
                    <div class="detail-item">
                        <img src="/img13.png" alt="View" class="detail-icon" />
                        <span class="card-key">View</span>
                        <span class="card-props">{item.view}</span>
                    </div>
                    <div class="detail-item">
                        <img src="/img14.png" alt="Size" class="detail-icon" />
                        <span class="card-key">Size</span>
                        <span class="card-props">{item.size}</span>
                    </div>
                    <div class="detail-item">
                        <img src="/img15.png" alt="Location" class="detail-icon" />
                        <span class="card-key">{item.location}</span>
                    </div>
                    <div class="detail-item item-price">
                        <span class="updated">{item.updated}</span>
                        <span class="card-price">PKR{item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    ))

    const productDetail = [{
        name: "Main Bulevard Bill Board",
        price: "PKR 3,750,000",
        location: "Opera",
        contact: "+92 321 2156769",
        screenView: "Single Side",
        owner: "Michael Johan",
        size: "360 x 450",
        status: "Available",
        views: "35,9800",
        review: "4.5",
        updated: "24 hours ago",
        address: "Opera Tower, Lahore",
        image: "/detail/main-image.png"
    }]


    return (
        <>
            <Breadcrumbs name="Detail Page" />
            <main>
                <div className="container">
                    <div className="main-content">
                        <div className="new-content">
                            <div className="gallery">
                                {galleryElement}
                            </div>
                            <img src={productDetail[0].image} alt="Main Billboard" className="main-image" />
                        </div>
                        <div className="description">
                            <h2>Description</h2>
                            <p>
                                {isExpanded ? description : truncatedText}
                            </p>
                            <button className="show-more" onClick={toggleExpansion}>
                                {isExpanded ? "Show Less" : "Show More"}
                            </button>
                        </div>
                        <div className="reviews">
                            <div className="review-title">
                                <h2>Reviews</h2>
                                <div className="review-filter" onClick={toggleFilterMenu}>
                                    <h2>Filter</h2>
                                    <img src="/detail/filter.png" alt="Filter" />

                                    {isFilterMenuVisible && (
                                        <div className="filter-menu">
                                            <div className="star">
                                                <p>1</p>
                                                <p className="star-rating">&#9733;</p>
                                                <p>Star</p>
                                            </div>
                                            <div className="star">
                                                <p>2</p>
                                                <p className="star-rating">&#9733; &#9733;</p>
                                                <p>Star</p>
                                            </div>
                                            <div className="star">
                                                <p>3</p>
                                                <p className="star-rating">&#9733; &#9733; &#9733;</p>
                                                <p>Star</p>
                                            </div>
                                            <div className="star">
                                                <p>4</p>
                                                <p className="star-rating">&#9733; &#9733; &#9733; &#9733;</p>
                                                <p>Star</p>
                                            </div>
                                            <div className="star">
                                                <p>5</p>
                                                <p className="star-rating">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                                <p>Star</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {reviewElement}
                        </div>
                        <div className="write-review">
                            <a href="#">Write a review</a>
                        </div>
                    </div>
                    <div className="info">
                        <h3 className="product-title">
                            {productDetail[0].name}
                        </h3>
                        <p className="price">
                            {productDetail[0].price}
                        </p>
                        <div className="loc">
                            <img src="/detail/loc.svg" alt="" />
                            <p>
                                {productDetail[0].location}
                            </p>
                        </div>
                        <div className="contact">
                            <p>{getPhoneNumberDisplay()}</p>
                            {!showFullNumber && (
                                <button className="show-number" onClick={handleShowNumber}>
                                    <img src="/detail/phone.svg" alt="phone icon" /> Show phone number
                                </button>
                            )}
                        </div>
                        <button className="whatsapp">
                            <img src="/detail/whatsapp.svg" alt="" />
                            Text on Whatsapp
                        </button>
                        <div className="props">
                            <div className="props-card">
                                <img src="/detail/screen.svg" alt="" />
                                <h4>Screen View</h4>
                                <p>
                                    {productDetail[0].screenView}
                                </p>
                            </div>
                            <div className="props-card">
                                <img src="/detail/owner.svg" alt="" />
                                <h4>Owner</h4>
                                <p>
                                    {productDetail[0].owner}
                                </p>
                            </div>
                            <div className="props-card">
                                <img src="/detail/size.svg" alt="" />
                                <h4>Size</h4>
                                <p>
                                    {productDetail[0].size}
                                </p>
                            </div>
                            <div className="props-card">
                                <img src="/detail/status.svg" alt="" />
                                <h4>Status</h4>
                                <p>
                                    {productDetail[0].status}
                                </p>
                            </div>
                            <div className="props-card">
                                <img src="/detail/views.svg" alt="" />
                                <h4>Views </h4>
                                <p>
                                    {productDetail[0].views}
                                </p>
                            </div>
                            <div className="props-card">
                                <img src="/detail/review.svg" alt="" />
                                <h4>Review </h4>
                                <p>
                                    {productDetail[0].review}
                                </p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-key">
                                <p>Owner :</p>
                                <p>Last Update :</p>
                                <p>Address :</p>
                            </div>
                            <div className="address-value">
                                <p>
                                    {productDetail[0].owner}
                                </p>
                                <p>
                                    {productDetail[0].updated}
                                </p>
                                <p>
                                    {productDetail[0].address}
                                </p>
                            </div>
                        </div>
                        <div className="address-image">
                            <img src="/detail/address-image.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.4892751404564!2d74.33697457506891!3d31.510719247619765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f290114d068d3%3A0x88f934d905945617!2sBrown%20Tech%20Int.!5e0!3m2!1sen!2s!4v1718187215502!5m2!1sen!2s"
                        width="1000"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div class="similar">
                    <h2>Similar Bill Board</h2>
                    <div class="similar-card-block">

                        {relatedProductsElement}

                    </div>
                </div>
            </main>
        </>
    );
}
