import React from "react"

export default function SkillsItem({ name, url }) {
  return (
    <div className="SkillsItem-container">
      <div className="SkillsItem-content">
        <div className="SkillsItem-img">
          <img src={url} alt={name} />
        </div>
      </div>
      <div className="SkillsItem-text">
        <h3 className="Skills-name">{name}</h3>
      </div>
    </div>
  )
}
