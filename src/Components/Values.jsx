import React from "react"
import ValuesItems from "./items/ValuesItems"

export default function Values() {
  const ValuesItem = [
    {
      title: "Sabemos que todos aprenden diferente, a su propio ritmo.",
      description:
        "Construimos un ambiente seguro en el que nadie se queda atrás. Nuestra forma de conseguir dominio sobre un temano es a través de puntuaciones o carreras de velocidad.Para nosotros el aprendizaje es un maratón, no una carrera de velocidad y el dominio se consigue con la motivación suficiente para disfrutar del maratón, respetando los procesos de aprendizaje de cada alumno.",
      imgUrl: "https://i.postimg.cc/d15BV6k1/idea.png",
    },
    {
      title: "Aprendemos en equipo.",
      description:
        "Aprendemos en equipo. El mundo moderno es creado por equipos de personas brillantes que mezclan todo tipo de habilidades y usan el conocimiento de forma transversal.Ya no vivimos en la época de genios solitarios.Vivimos en una época en la que la comunicación efectiva y la construcción de un equipo es lo más importante en la creación de progreso.",
      imgUrl: "https://i.postimg.cc/rmZ1kp3R/unido.png",
    },
    {
      title: "Ya construimos algo ¿Por qué no llevarlo al siguiente nivel?",
      description:
        "En el mundo de hoy no basta con saber construir cosas, tenemos que impulsar a nuestra niñas y niños a que emprendan y logren sus objetivos haciendo que las cosas sucedan. Aprender a planificar proyectos es tan importante como el acto de crear. Aprender, construir y luego ejecutar, así es como lo hacemos nosotros y las personas más brillantes de nuestra época. Entrenamos a nuestras niñas y niños para ejecutar en el mundo real. ",
      imgUrl: "https://i.postimg.cc/1tXFJQXm/rompecabezas.png",
    },
    {
      title: "Aprendemos construyendo.",
      description:
        "Para nosotros lo más importante es el acto de creación y la comprensión de conceptos abstractos a través de la exploración y la resolución de problemas.  Aprendemos de forma colaborativa, en equipo, como en el mundo real. ",
      imgUrl: "https://i.postimg.cc/nLR2HTQL/bloques.png",
    },
  ]

  return (
    <section className="Values" id="porque">
      <div className="Values-conteiner">
        <div className="Values-content">
          {ValuesItem.map((item, index) => (
            <div key={index}>
              <ValuesItems
                index={index}
                title={item.title}
                imgUrl={item.imgUrl}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
