import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Learn from './Learn'
import Testimony from './Testimony'
import Duck from './Duck'

export default function Layout(props) {
    return (
    <>
        <Nav></Nav>
         <main >
             <Hero/>
             <About/>
             <Learn/>
             <Testimony/>
             <Duck/>
         </main>
    </> 
    )
}
