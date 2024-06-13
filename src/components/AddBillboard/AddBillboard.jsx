import React, { useState, useEffect } from "react";
import Breadcrumbs from "../layouts/Breadcrumbs";
import './billboard.css';

export default function AddBillboard() {
    const [billboard, setBillboard] = useState({
        description: "",
        location: {
            longitude: "",
            latitude: "",
        },
        price: "",
        image: [],
        category: "",
        size: {
            width: "",
            widthUnit: "cm",
            height: "",
            heightUnit: "cm",
            groundHeight: "",
            groundHeightUnit: "foot",
        },
        city: "",
        time: {
            duration: "",
            durationUnit: "hours",
        },

        features: [],
        terms: [],
    });


    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const {
            description, price, image, category, size, city, time, features, terms
        } = billboard;

        if (
            description && price && image.length && category && size.width && size.height && size.groundHeight &&
            city && time && features.length && terms.length
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setBillboard((prev) => ({
                    ...prev,
                    [name]: [...prev[name], imageUrl],
                }));
            }
        } else {
            const [mainKey, subKey] = name.split('.');
            if (subKey) {
                setBillboard({
                    ...billboard,
                    [mainKey]: {
                        ...billboard[mainKey],
                        [subKey]: value,
                    },
                });
            } else {
                setBillboard({
                    ...billboard,
                    [name]: value,
                });
            }
        }
    };

    useEffect(() => {
        validateForm();
        const submitButton = document.getElementById("submit")
        if (isFormValid) {
            submitButton.disabled = false;
            submitButton.classList.remove("disabled");
        }
        return () => {
            billboard.image.forEach(img => URL.revokeObjectURL(img));
        };
    }, [billboard, isFormValid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            alert("Form Submitted")
        } else {
            alert("Please fill all the fields");
        }
    };

    const handleCategorySelect = (category) => {
        setBillboard({
            ...billboard,
            category,
        });
    };

    const handleCitySelect = (city) => {
        setBillboard({
            ...billboard,
            city,
        });
    };

    const handleFeatureSelect = (feature) => {
        setBillboard((prev) => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature],
        }));
    };

    const categories = [
        { img: "img1.png", title: "Mobile Billboards" },
        { img: "img2.png", title: "Pole billboard" },
        { img: "img3.png", title: "Digital Billboards" },
        { img: "img4.png", title: "Attractive Billboards" },
        { img: "img5.png", title: "Building Billboards" },
        { img: "img6.png", title: "Roundabout Billboard" },
        { img: "img7.png", title: "Bus Billboard" },
        { img: "img8.png", title: "Bus Shelters" },
        { img: "img9.png", title: "Street Billboards" },
        { img: "img10.png", title: "360 Billboards" }
    ];

    const categoryElements = categories.map((category, index) => (
        <div key={index} className={`category-card ${billboard.category === category.title ? 'category-selected' : ''}`} onClick={() => handleCategorySelect(category.title)}>
            <img src={category.img} alt={category.title} />
            <p>{category.title}</p>
        </div>
    ));

    const cities = ["Okara", "Lahore", "Karachi", "Faisalabad", "Islamabad", "Multan", "Sialkot"];

    const cityElements = cities.map((city, index) => (
        <button type="button" key={index} className={`city-card ${billboard.city === city ? 'city-selected' : ''}`} onClick={() => handleCitySelect(city)}>
            {city}
        </button>
    ));

    const features = [
        { img: "img1.png", title: "Side Light" },
        { img: "img2.png", title: "Backup Generator" },
        { img: "img3.png", title: "Printing Services" },
        { img: "img4.png", title: "Posting Services" },
        { img: "img5.png", title: "3D Option" },
        { img: "img6.png", title: "Backup Generator" },
        { img: "img7.png", title: "Printing Services 2" },
        { img: "img8.png", title: "Posting Services 2" },
        { img: "img9.png", title: "Posting Services 3" },
        { img: "img10.png", title: "Posting Services 4" }
    ];

    const featureElements = features.map((feature, index) => (
        <div key={index} className={`category-card ${billboard.features.includes(feature.title) ? 'features-selected' : ''}`} onClick={() => handleFeatureSelect(feature.title)}>
            <img src={feature.img} alt={feature.title} />
            <p>{feature.title}</p>
        </div>
    ));

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setBillboard((prev) => {
                const newImages = [...prev.image];
                newImages[index] = imageUrl;
                return {
                    ...prev,
                    image: newImages,
                };
            });
        }
    };

    return (
        <>
            <Breadcrumbs name="Add Billboard" />

            <main>
                <div>
                    <form onSubmit={handleSubmit}>

                        {/* Main Image  */}

                        <div className="main-image">
                            <div className="main-image-section">
                                {billboard.image[0] ?
                                    <img src={billboard.image[0]} className="cover" alt="Main" onClick={() => document.getElementById('main-image-input').click()} />
                                    :
                                    <img src="/add-billboard/plus.png" className="add-image" alt="Main" onClick={() => document.getElementById('main-image-input').click()} />}
                                <input type="file" id="main-image-input" name="image" style={{ display: 'none' }} onChange={(e) => handleImageUpload(0, e)} required />
                            </div>
                        </div>

                        {/* Image Gallery  */}

                        <div className="more-images">
                            <div className="heading">
                                <img src="/add-billboard/pictures.png" />
                                <h2>Add more pictures :</h2>
                            </div>
                            <div className="image-container">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="image-element">
                                        {billboard.image[index] ?
                                            <img
                                                className="cover"
                                                src={billboard.image[index]}
                                                alt={`Upload ${index}`}
                                                onClick={() => document.getElementById(`image-input-${index}`).click()}
                                            /> :
                                            <img
                                                src="/add-billboard/plus.png"
                                                alt={`Upload ${index}`}
                                                className="add-image"
                                                onClick={() => document.getElementById(`image-input-${index}`).click()}
                                            />}

                                        <input
                                            type="file"
                                            id={`image-input-${index}`}
                                            name="image"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(index, e)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Select Category  */}

                        <div className="select-category">
                            <div className="heading">
                                <img src="/add-billboard/category.png" />
                                <h2>Select Category :</h2>
                            </div>

                            <div className="category-block">
                                {categoryElements}
                            </div>
                        </div>

                        {/* Select City  */}

                        <div className="select-city">
                            <div className="heading">
                                <img src="/add-billboard/city.png" />
                                <h2>City :</h2>
                            </div>
                            <div className="city-block">
                                {cityElements}
                            </div>
                        </div>

                        {/* Select Size  */}

                        <div className="select-size">
                            <div className="heading">
                                <img src="/add-billboard/size.png" />
                                <h2>Select Size :</h2>
                            </div>

                            <div className="size-container">
                                <div className="size-element">
                                    <div className="size-input">
                                        <img src="/add-billboard/width.png" alt="Width" />
                                        <input type="text" name="size.width" placeholder="Width" onChange={handleChange} required />
                                    </div>
                                    <div className="select-container">
                                        <select name="size.widthUnit" id="width" onChange={handleChange}>
                                            <option value="cm" selected>cm</option>
                                            <option value="mm">mm</option>
                                            <option value="in">in</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="size-element">
                                    <div className="size-input">
                                        <img src="/add-billboard/height.png" alt="Height" />
                                        <input type="text" name="size.height" placeholder="Height" onChange={handleChange} required />
                                    </div>
                                    <div className="select-container">
                                        <select name="size.heightUnit" id="height" onChange={handleChange}>
                                            <option value="cm" selected>cm</option>
                                            <option value="mm">mm</option>
                                            <option value="in">in</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="size-element">
                                    <div className="size-input">
                                        <img src="/add-billboard/gheight.png" alt="Ground Height" />
                                        <input type="text" name="size.groundHeight" placeholder="Ground Height" onChange={handleChange} required />
                                    </div>
                                    <div className="select-container">
                                        <select name="groundHeightUnit" onChange={handleChange} id="ground-height">
                                            <option value="cm" selected>cm</option>
                                            <option value="mm">mm</option>
                                            <option value="in">in</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Section  */}

                        <div className="map-section">
                            <div className="map-header">
                                <div className="heading">
                                    <img src="/add-billboard/map.png" />
                                    <h2>Select Location on map :</h2>
                                </div>
                                <div className="map-search">
                                    <input type="text" placeholder="Search on Map" />
                                    <img src="/add-billboard/search.png" alt="" />

                                </div>
                            </div>
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.4892751404564!2d74.33697457506891!3d31.510719247619765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f290114d068d3%3A0x88f934d905945617!2sBrown%20Tech%20Int.!5e0!3m2!1sen!2s!4v1718187215502!5m2!1sen!2s"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Rate & Tenure  */}
                        <div className="rate-tenure">
                            <div className="rate">
                                <h2>
                                    Rate :
                                </h2>
                                <div className="size-input">
                                    <img src="/add-billboard/rs.png" alt="" />
                                    <   input type="text" name="price" onChange={handleChange} placeholder="RS" />
                                </div>
                            </div>
                            <div className="tenure">
                                <h2>Tenure :</h2>
                                <div className="tenure-container">
                                    <div className="size-input">
                                        <img src="/add-billboard/ten.png" alt="" />
                                        <input type="text" name="time.duration" placeholder="24/7" onChange={handleChange} />
                                    </div>
                                    <div className="select-container">
                                        <select name="time.durationUnit" onChange={handleChange} id="timeUnit">
                                            <option value="hours" selected>Hours</option>
                                            <option value="days">Days</option>
                                            <option value="weeks">Weeks</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Select Features  */}

                        <div className="select-category">
                            <div className="heading">
                                <img src="/add-billboard/features.png" />
                                <h2>Select Features :</h2>
                            </div>

                            <div className="category-block">
                                {featureElements}
                            </div>
                        </div>

                        {/* Description  */}

                        <div className="description">
                            <div className="heading">
                                <img src="/add-billboard/description.png" />
                                <h2>Description :</h2>
                            </div>
                            <div className="description-container">
                                <textarea name="description" id="description" rows="8" onChange={handleChange}></textarea>
                            </div>

                            {/* Description Suggestion  */}

                            <div className="suggestion">
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Great view from the standing traffic</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Bus Adds</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Light Billboards</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Light Billboards</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Light Billboards</p>
                                </div>
                            </div>
                        </div>

                        {/* Terms & Conditions  */}

                        <div className="terms">
                            <div className="heading">
                                <img src="/add-billboard/terms.png" />
                                <h2>Terms & Conditions :</h2>
                            </div>

                            <div className="terms-container">
                                <textarea name="terms" id="terms" rows="8" onChange={handleChange}></textarea>
                            </div>

                            {/* Terms Suggestion  */}

                            <div className="suggestion">
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Great view from the standing traffic</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Bus Adds</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Light Billboards</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Light Billboards</p>
                                </div>
                                <div className="suggestion-content">
                                    <img src="/add-billboard/add.png" alt="Add" />
                                    <p>Light Billboards</p>
                                </div>
                            </div>
                        </div>

                        <div className="submit">
                            <button type="submit" id="submit" className="disabled" disabled>Publish & Preview</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
