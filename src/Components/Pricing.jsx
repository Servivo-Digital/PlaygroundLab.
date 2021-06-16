import React from 'react'
import PricingItems from './items/PricingItems'

export default function Pricing() {

    const PricingItem = [
        {
            title:'Introducción a la programación: ',
            descripcion:'inica en el mundo de la programacion y crea bases solidas para construir el futuro',
            temary: [{name:'fundamentos',type:'basic'},{name:'secuencias',type:'basic'}, {name:'estructuras de datos',type:'basic'}, {name:'código en bloques',type:'basic'}, {name:'bucles' ,type:'basic'},{name:'Plan de estudio detallado',type:'basic'}],
            month:'1 mes',
            classes: '8 clases',
            price: '3,497',
            currency: 'MXN',
            UndividualPrice:'437',
            project:'Desarrolla un videojuego en el navegador'
        },
        {
            title:'Robot / Web Developer',
            descripcion:'Es momento de explotar al maximo tus conocimientos',
            temary: [{name:'Eventos en el navegador',type:'WEB'}, {name:'UI',type:'WEB'},{name: 'desarrollo en equipo',type:'WEB'},{name: 'desarrollo de una App real.',type:'WEB'},{name:'Plan de estudio detallado',type:'WEB'}],
            month:'6 mes ',
            classes: '48 clases',
            price: '3,399',
            currency: 'MXN',
            UndividualPrice:'437',
            project:'Construye un robot real y controlalo desde el navegador.'
        },
    ]

    return (
       <section className="Pricing">
           <div className="Pricing-contianer">
               <div className="Pricing-content">
               {
                        PricingItem.map((item, index) => (
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
                                ></PricingItems>
                            </div>
                        ))
                    }
               </div>
           </div>
       </section>
    )
}
