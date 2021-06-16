import React from 'react'

export default function TestimonyCard({name,type,message,urlmg}) {
    return (
        <div className="Testimony-card-container">
            <div className="Testimony-card-content">
                <div className="Testimony-card-text">
                    <p>
                        {message}
                    </p>
                </div>
                <div className="Testimony-card-footer">
                    <div className="Testimony-card-footer-avatar">
                            <img src="  {urlImg}"  alt="avatar" />
                    </div>
                    <div className="Testimony-card-footer-avatar-name">
                            {name}
                    </div>
                </div>
            </div>
        </div>
    )
}
