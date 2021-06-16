import React from 'react'

export default function ValuesItems({title,imgUrl,description}) {
    return (
        <div className="ValuesItems-container">
            <div className="ValuesItems-content">
                <div className="ValuesItems-text">
                    <h3 className="ValuesItems-title">{title}</h3>
                    <p className="ValuesItems-description">{description}</p>
                </div>
                <div className="ValuesItems-img">
                   {imgUrl === '' ?' ':<img src={imgUrl} alt="" />}
                </div>
            </div>
        </div>
    )
}
