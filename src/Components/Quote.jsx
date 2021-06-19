import React from "react"
import QuoteCard from "./items/QuoteCard"

export default function Quote() {
  const QuoteItems = [
    {
      quote: "Tus habilidades valdrán más que tus estudios ",
      author: "Forbes",
      imgUrl:
        "https://i.postimg.cc/26xhgY6G/Rc7f638c4e8a94cf6f62abe3d535cca4b-1.png",
    },
    {
      quote: "La brecha de habilidades digitales se está ampliando rápidamente",
      author: "Worl Economic Forum",
      imgUrl:
        "https://i.postimg.cc/KYM5qCBp/1200px-World-Economic-Forum-logo-1.png",
    },
    {
      quote:
        "Hay 1,7 millones de puestos de trabajo tecnológicos sin cubrir en todas las industrias de EE. UU. Y Europa ",
      author: "The Wall Street Journal ",
      imgUrl:
        "https://i.postimg.cc/C5YJfJZP/Ra1cef7d9a5d6826d7d4180e18dcd9780-1.png",
    },
  ]

  return (
    <section className="Quote">
      <div className="Quote-conteiner">
        <div className="Quote-content">
          {QuoteItems.map((item, index) => (
            <div key={index}>
              <QuoteCard
                quote={item.quote}
                imgUrl={item.imgUrl}
                author={item.author}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
