import React from "react"
import PricingItems from "./items/PricingItems"

export default function Pricing() {
  const PricingItem = [
    {
      title: "Introducción a la programación: ",
      descripcion:
        "inica en el mundo de la programacion y crea bases solidas para construir el futuro",
      temary: [
        { name: "fundamentos" },
        { name: "secuencias" },
        { name: "estructuras de datos" },
        { name: "código en bloques" },
        { name: "bucles" },
        { name: "Plan de estudio detallado" },
      ],
      month: "1 mes",
      classes: "8 clases",
      price: "3,497",
      currency: "MXN",
      UndividualPrice: "437",
      project: "Desarrolla un videojuego en el navegador",
      urlFile: "www.google.com",
      caption: "Mas popular",
    },
    {
      title: "Robot / Web Developer",
      descripcion: "Es momento de explotar al maximo tus conocimientos",
      temary: [
        { name: "Eventos en el navegador" },
        { name: "UI" },
        { name: "desarrollo en equipo" },
        { name: "desarrollo de una App real." },
        { name: "Plan de estudio detallado" },
      ],
      month: "6 mes ",
      classes: "48 clases",
      price: "3,399",
      currency: "MXN",
      UndividualPrice: "437",
      project: "Construye un robot real y controlalo desde el navegador.",
      urlFile: "https://www.google.com",
      caption: "Mejor Valor",
    },
  ]

  return (
    <section className="Pricing">
      <div className="Pricing-contianer">
        <div className="Pricing-content">
          <h2 className="Pricing-title">Pricing</h2>
          {PricingItem.map((item, index) => (
            <div key={index}>
              <PricingItems
                title={item.title}
                descripcion={item.descripcion}
                temary={item.temary}
                month={item.month}
                classes={item.classes}
                price={item.price}
                currency={item.currency}
                UndividualPrice={item.UndividualPrice}
                project={item.project}
                urlFile={item.urlFile}
                caption={item.caption}
              ></PricingItems>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
