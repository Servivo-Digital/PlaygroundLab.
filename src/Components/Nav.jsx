import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  const navItems = [
    {
      caption: "Inicio",
      href: "/",
    },
    {
      caption: "¿Por qué aparender a programar?",
      href: "#porque",
    },
    {
      caption: "Contactanos",
      href: "#contacto",
    },
    {
      caption: "Agenda tu cita ",
      href: "/Agenda",
    },
  ]
  return (
    <header className="Header">
      <nav className="Header-nav day dark-scheme">
        <img
          className="Header-nav-logo"
          src="https://i.postimg.cc/B6kYhnfP/logo.png"
          alt="logo"
        />
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              {item.href === "/Agenda" ? (
                " "
              ) : (
                <Link to={item.href}>{item.caption}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
