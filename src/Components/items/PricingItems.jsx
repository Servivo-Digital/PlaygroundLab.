import React from "react"

export default function PricingItems(props) {
  const {
    title,
    descripcion,
    temary,
    month,
    price,
    currency,
    UndividualPrice,
    project,
    classes,
    urlFile,
    caption,
  } = props

  return (
    <div className="PricingItems-container">
      <div className="PricingItems-content">
        <div className="PricingItems-card day dark-scheme">
          <div className="PricingItems-card-header">
            <h3 className="PricingItems-card-header-title">{title}</h3>
            <p className="PricingItems-card-header-description">
              <span>
                {month},{classes}
              </span>
            </p>
          </div>
          <div className="PricingItems-card-body">
            <p className="PricingItems-card-body-description">{descripcion}</p>
            <ul className="PricingItems-card-body-temary">
              {temary.map(item =>
                item.name === "Plan de estudio detallado" ? (
                  <a
                    target="_blank"
                    rel="noopener"
                    href={urlFile}
                    key={item.name}
                  >
                    {item.name}
                  </a>
                ) : (
                  <li
                    className="PricingItems-card-body-temary-list"
                    type="square"
                    key={item.name}
                  >
                    {item.name}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="PricingItems-card-footer">
            <div className="PricingItems-card-footer-price">
              <div
                className={
                  caption === "Mejor Valor"
                    ? "card-footer-caption bestValue"
                    : "card-footer-caption"
                }
              >
                <p>{caption}</p>
              </div>
              <div className="card-footer-section-price">
                <span className="PricingItems-card-footer-price-currency">
                  {currency}
                </span>
                <span className="PricingItems-card-footer-price-prices">
                  ${price}.00 <span>/mes</span>
                </span>
              </div>

              <div className="PricingItems-card-footer-price-individual">
                <p>
                  {" "}
                  Precio por clase ${UndividualPrice}.00 {currency}{" "}
                </p>
              </div>
              <span className="PricingItems-card-footer-project">
                <div className="footer-project-title">
                  <img
                    src="https://i.postimg.cc/KzzNRYkF/lightbulb.png"
                    alt=""
                  />
                  <p>Projecto del curso:</p>
                </div>
                <p className="footer-project-project">{project}</p>
              </span>
            </div>
            <div className="pricing-buttom">
              <div className="content-footer-button">
                <a href="">Adquiere Ahora</a>
              </div>
            </div>
            <div className="hacer-refactory-de-esto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
