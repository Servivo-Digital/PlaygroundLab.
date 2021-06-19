import React from "react"
import Quote from "./Quote"
import Values from "./Values"
export default function Because() {
  return (
    <section className="Because">
      <div className="Because-container">
        <div className="Because-content">
          <h2 className="Because-title">¿Por qué aprender con nosotros? </h2>
          <Quote />
          <Values />
        </div>
      </div>
    </section>
  )
}
