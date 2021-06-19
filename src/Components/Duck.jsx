import React from "react"

export default function Duck() {
  return (
    <section className="Duck">
      <div className="Duck-container">
        <div className="Duck-content">
          <div className="Duck-content-img">
            <img
              src="https://i.postimg.cc/mr2ZZG2h/Mask-Group-1.png"
              alt="Pato"
            />
          </div>
          <div className="Duck-content-text">
            <h2 className="Duck-content-text-title">Método de pato de goma.</h2>
            <p className="Duck-content-text-body">
              “Una excelente manera de aprender algo, consiste en explicarle a
              un objeto lo que está tratando de aprender. Un patito de goma, por
              ejemplo, es un buen oyente. Explique lo que está aprendiendo al
              patito o al objeto que elija. Esto puede ayudarlo a comprender
              ideas difíciles y complejas. La técnica del patito de goma es tan
              eficaz que los programadores de computadoras la utilizan. Línea
              por línea, le explican al pato de goma lo que se supone que debe
              hacer su código. De esta manera, pueden descubrir dónde están los
              problemas en su código”.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
