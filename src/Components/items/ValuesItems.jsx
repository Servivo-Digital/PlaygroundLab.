import React from "react"

export default function ValuesItems({ title, imgUrl, description, index }) {
  const titleIndex = ["one", "two", "three", "four"]
  return (
    <div className="ValuesItems-container">
      <div className="ValuesItems-content">
        {imgUrl === "" ? (
          " "
        ) : (
          <div className="ValuesItems-img">
            <img src={imgUrl} alt="" />
          </div>
        )}
        <div className="ValuesItems-text">
          <h3 className={"ValuesItems-title" + " " + titleIndex[index]}>
            {title}
          </h3>
          <p className="ValuesItems-description">{description}</p>
        </div>
      </div>
    </div>
  )
}
