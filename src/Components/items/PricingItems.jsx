import React from 'react'

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
        classes
    } = props




    return (
        <div className="PricingItems-container">
            <div className="PricingItems-content">
                <div className="PricingItems-card">
                    <div className="PricingItems-card-header">
                        <h3 className="PricingItems-card-header-title">
                            {title}
                        </h3>
                        <p className="PricingItems-card-header-description">
                            <samp>
                                {month},{classes}
                            </samp>
                        </p>
                    </div>
                    <div className="PricingItems-card-body">
                        <p className="PricingItems-card-body-description">{descripcion}</p>
                        <ul className="PricingItems-card-body-temary">
                            {
                                temary.map((item) => (
                                    <li className="PricingItems-card-body-temary-list" type="square" key={item.name}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="PricingItems-card-footer">
                        <p className="PricingItems-card-footer-price">
                            <span className="PricingItems-card-footer-price-currency" >
                                {currency}
                            </span>
                            <span className="PricingItems-card-footer-price-prices">
                                {price}
                            </span>
                            <span className="PricingItems-card-footer-price-individual" >
                                {UndividualPrice}
                            </span>
                            <span className="PricingItems-card-footer-project">
                                {project}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
