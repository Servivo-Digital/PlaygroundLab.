import React from "react"

export default function QuoteCard({ quote, imgUrl, author }) {
  return (
    <div className="QuoteCard-container">
      <section className="QuoteCard-content">
        <div className="QuoterCard-author-img">
          <img src={imgUrl} alt={author} />
        </div>
        <div className="QuoteCard-Text">
          <p>{quote}</p>
        </div>
      </section>
    </div>
  )
}
