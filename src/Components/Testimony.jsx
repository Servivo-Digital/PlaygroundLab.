import React from "react"
import TestimonyCard from "./items/TestimonyCard"

export default function Testimony() {
  const TestimonyItems = [
    {
      name: "Zain",
      type: "secundary",
      urlImg: "https://i.postimg.cc/ZRQfnKfK/usuario-1.png",
      message:
        '"¡Excelentes maestros! Me ayudaron mucho en mis exámenes, tengo 17 pero estoy en  la  universidad estudiando programación profesional y me  ayudaron mucho!"',
    },
    {
      name: "Brandon",
      type: "primary",
      urlImg: "https://i.postimg.cc/ZRQfnKfK/usuario-1.png",
      message:
        '"Hace mucho que no había visto a alguien que explique tan bien, da gusto seguir y no terminar. Estoy haciendo un curso en udemy y he aprendido  más aquí que en mi curso”',
    },
    {
      name: "José Luis",
      type: "secundary",
      urlImg: "https://i.postimg.cc/ZRQfnKfK/usuario-1.png",
      message: "“Buen contenido se me pasó el tiempo volando” ",
    },
  ]
  return (
    <section className="Testimony">
      <div className="Testimony-container">
        <h2 className="Testimony-content-title">Testimonios</h2>
        <div className="Testimony-content">
          {TestimonyItems.map((item, index) => (
            <div key={index}>
              <TestimonyCard
                name={item.name}
                type={item.type}
                urlImg={item.urlImg}
                message={item.message}
              ></TestimonyCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
