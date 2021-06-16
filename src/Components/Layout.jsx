import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

export default function Layout(props) {
    return (
    <>
        <Nav></Nav>
         <main >
             <Hero/>
         </main>
    </> 
    )
}
