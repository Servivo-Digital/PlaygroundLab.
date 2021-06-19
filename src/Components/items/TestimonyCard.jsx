import React from "react"

export default function TestimonyCard({ name, type, message, urlImg }) {
  return (
    <div className="Testimony-card-container">
      <div className="Testimony-card-content">
        <div
          className={
            type === "primary"
              ? "Testimony-card-text primary"
              : "Testimony-card-text"
          }
        >
          <p>{message}</p>
        </div>
        <div className="Testimony-card-footer">
          <div className="Testimony-card-footer-avatar">
            <img src={urlImg} alt="avatar" />
          </div>
          <div className="Testimony-card-footer-avatar-name">
            <p> {name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
