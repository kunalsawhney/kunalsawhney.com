import React from "react"

//Featured Bar
import afropunk from "../images/afropunk.png"
import creativeBoom from "../images/creative-boom.png"
import vogue from "../images/vogue.png"
import wgsn from "../images/wgsn.png"

// Socials
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"

const featured = [
  { name: "CreativeBoom", image: creativeBoom },
  { name: "Afropunk", image: afropunk },
  { name: "WGSN", image: wgsn },
  { name: "Vogue", image: vogue },
]

const Footer = () => {
  return (
    <footer>
      <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key="name">
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="inner">
          <span>© 2021 Hosted on Github</span>
          <div className="socials">
            <a href="https://twitter.com/19kunals96">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/kunalsawhney_/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/kunal-sawhney-607aa3bb/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <span>Built with  Gatsby</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer