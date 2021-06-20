import React from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Learn from "./Learn"
import Testimony from "./Testimony"
import Duck from "./Duck"
import Because from "./Because"
import Pricing from "./Pricing"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div className="day dark-scheme">
      <Nav></Nav>
      <main>
        <Hero />
        <div className="content wrapper">
          <About />
          <Learn />
          <Testimony />
          <Duck />
          <Because />
          <Pricing />
          <Footer />
        </div>
      </main>
    </div>
  )
}
