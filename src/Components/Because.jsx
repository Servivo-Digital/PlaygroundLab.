import React from 'react'
import Quote from './Quote'
import Values from './Values'
export default function Because() {
    return (
        <section className="Because">
            <div className="Because-container">
                <div className="Because-content">
                    <Quote/>
                    <Values/>
                </div>
            </div>
        </section>
    )
}
