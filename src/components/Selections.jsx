import React from 'react'

export default function Selections() {

    const selections = [
        {
            img: "img11.png",
            title: "Clock Tower Bill Board",
            duration: "2 Months",
            view: 4450,
            size: "36’ x 60’",
            location: "LHR, PKR",
            price: "PKR249",
            lastUpdated: "Updated 24hours ago"
        },
        {
            img: "img11.png",
            title: "Clock Tower Bill Board",
            duration: "2 Months",
            view: 4450,
            size: "36’ x 60’",
            location: "LHR, PKR",
            price: "PKR249",
            lastUpdated: "Updated 24hours ago"
        },
        {
            img: "img11.png",
            title: "Clock Tower Bill Board",
            duration: "2 Months",
            view: 4450,
            size: "36’ x 60’",
            location: "LHR, PKR",
            price: "PKR249",
            lastUpdated: "Updated 24hours ago"
        },
        {
            img: "img11.png",
            title: "Clock Tower Bill Board",
            duration: "2 Months",
            view: 4450,
            size: "36’ x 60’",
            location: "LHR, PKR",
            price: "PKR249",
            lastUpdated: "Updated 24hours ago"
        }
    ]

    const selectionElement = selections.map((selection, index) => (
        <div key={index} className='selection-card'>
            <div className='selection-card-img'>
                <img src={selection.img} alt="" />
            </div>
            <div className='selection-card-content'>
                <h4>{selection.title}</h4>
                <div className='selection-card-props'>
                    <div className='selection-card-props-keys'>
                        <div className='keys'>
                            <img src="img12.png" alt="" />
                            <p>Duration</p>
                        </div>

                        <div className='keys'>
                            <img src="img13.png" alt="" />
                            <p>View</p>
                        </div>
                        <div className='keys'>
                            <img src="img14.png" alt="" />
                            <p>Size</p>
                        </div>
                        <div className='keys keys-location'>
                            <img src="img15.png" alt="" />
                            <p>{selection.location}</p>
                        </div>
                    </div>
                    <div className='selection-card-props-values'>
                        <p>{selection.duration}</p>
                        <p>{selection.view}</p>
                        <p>{selection.size}</p>
                        <p className='value-time'>{selection.lastUpdated}</p>
                    </div>
                </div>

            </div>
            <div className='selection-card-price'>
                {selection.price}
            </div>
        </div>
    ))


    return (
        <section className='selection'>
            <div className='selection-header'>
                <div className='selection-title'>
                    <h3>The very best of our Selections</h3>
                    <p>Take a look at the best Billboard in your Area</p>
                </div>
                <div className='selection-link'>
                    <a href='#' >Select More &gt;</a>
                </div>
            </div>
            <div className='selection-block'>
                {selectionElement}
            </div>

        </section>
    )
}