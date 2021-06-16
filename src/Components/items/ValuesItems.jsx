import React from 'react'

export default function ValuesItems({title,imgUrl,description}) {
    return (
        <div className="ValuesItems-container">
            <div className="ValuesItems-content">
                <div className="ValuesItems-text">
                    <h3 className="ValuesItems-title">{title}</h3>
                    <p className="ValuesItems-description">{description}</p>
                </div>
                {
                imgUrl === '' ?' ':
                    <div className="ValuesItems-img">
                        <img src={imgUrl} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}
