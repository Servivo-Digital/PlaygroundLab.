import React from "react"

export default function Footer() {
  const socialItems = [
    {
      name: "Youtube",
      icon: "https://i.postimg.cc/pTbVqs86/youtube-1.png",
      url: "https://www.youtube.com/channel/UCJHGgOUNJ3ICSNclSYWtqDg",
    },
    {
      name: "Twitter",
      icon: "https://i.postimg.cc/tJ9qH7Bd/gorjeo.png",
      url: "",
    },
    {
      name: "Linkedin",
      icon: "https://i.postimg.cc/hPySHDTx/linkedin.png",
      url: "",
    },
    {
      name: "Instagram",
      icon: "https://i.postimg.cc/Wb3VmBC4/instagram.png",
      url: "",
    },
    {
      name: "Facebook",
      icon: "https://i.postimg.cc/j54TvtRD/facebook.png",
      url: "",
    },
  ]

  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-content">
          <div className="Footer-body">
            <div className="Footer-body-logo">
              <img src="https://i.postimg.cc/B6kYhnfP/logo.png" alt="logo" />
            </div>
            <div className="Footer-body-nav"></div>
          </div>
          <div className="Footer-footer">
            <div className="Footer-footer-social">
              {socialItems.map((item, index) =>
                item.url === "" ? (
                  ""
                ) : (
                  <div key={index * 100 + "_" + item.name}>
                    <div className="icon-img">
                      <a href={item.url}>
                        <img src={item.icon} alt={item.name} />
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="Footer-footer-copy">
              <p>
                Diseñado con{" "}
                <span role="img" aria-label="heart">
                  ❤️
                </span>{" "}
                en Playground lab
              </p>
              <p className="dir">
                Perif. Sur 3720, Jardines del Pedregal, Álvaro Obregón, 01900
                Ciudad de México, CDMX
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/*
<div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
*/
