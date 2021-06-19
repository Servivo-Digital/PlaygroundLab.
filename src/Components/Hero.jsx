import React from "react"
import CardHero from "./items/CardHero"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-img">
              <img
                src="https://i.postimg.cc/pVnRP9T7/Mask-Group.png"
                alt="niño"
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                Comienza en el increíble mundo de la tecnología y sé parte del
                futuro.
              </h1>
              <CardHero />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
