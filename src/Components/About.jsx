import React from "react"

export default function About() {
  return (
    <section>
      <div className="About-container">
        <div className="About-content">
          <div className="About-content-text">
            <h2 className="About-content-text-title">¿Quiénes somos?</h2>
            <div className="About-content-img">
              <img
                src="https://i.postimg.cc/MGRNhBtb/imng-1.png"
                alt="imagen"
              />
            </div>
            <div className="About-content-text-description">
              <p className="About-content-text p1">
                Somos un grupo de amantes, creyentes y apacionados de la
                tecnología, la percivimos como la herramienta educativa con la
                cacidad de no solo crear oportunidades si no de cambiar el
                mundo, dando soluciones digitales a problemas reales.
              </p>
              <p className="About-content-text p2">
                Nuestras niñas y niños tendrean la capidad de crear el software
                y la tecnología que moverá al mundo, nosotros potencializaremos
                sus habilidades exponencialmente, sembrando bases solidadas de
                conocimento,logica y pensamiento critico para desarrollar su
                maximo potencial.
              </p>
              <p className="About-content-text p3">
                Formaremos a la próxima generación de talento tecnológico en
                LATAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
