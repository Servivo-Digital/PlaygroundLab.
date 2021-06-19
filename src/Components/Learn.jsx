import React from "react"
import SkillsItem from "./items/SkillsItem"

export default function Learn() {
  const Skills = [
    {
      name: "Logica",
      url: "https://i.postimg.cc/6p2LWkSB/Group-22.png",
    },
    {
      name: "Pensamiento creativo",
      url: "https://i.postimg.cc/W40GrMTK/Group-23.png",
    },
    {
      name: "Estructura",
      url: "https://i.postimg.cc/gj28fQ8F/Group-24.png",
    },
    {
      name: "Pensamiento algoritmico",
      url: "https://i.postimg.cc/ryfSSy28/Group-25.png",
    },
  ]
  return (
    <section className="Learn">
      <div className="Learn-container">
        <div className="Learn-content">
          <div className="Learn-content-title">
            <p>tus hijos</p>
            <h2>Aprenderán</h2>
          </div>
          <div className="Learn-content-body">
            <div className="Learn-content-body-img">
              {Skills.map(item => (
                <div key={"skills-" + item.name}>
                  <SkillsItem name={item.name} url={item.url} />
                </div>
              ))}
            </div>
          </div>
          <div className="Learn-content-footer">
            <div className="content-footer-button">
              <a href="www.google.com">Agenda una clase </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
