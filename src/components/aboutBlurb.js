import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to build</h3>
            <p>
              {/* It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). */}
              I am extremely good at one thing and that is building solutions. <br />
              I am currently working with Cactus Communications where I get to work 
              with a brilliant team of developers and experienced SME's. Mostly working 
              in domain of ML and NLP, I am responsible for creating full fledged 
              solutions systems that can scale and serve millions of users. I lead a 
              team of geeky developers who let make me learn newer things everyday.<br />
              I love to work with serverless designs because why not. Why should I 
              take the overhead of worrying about managing servers and instances 
              when I can focus on other things. I used AWS Lambda for one of my 
              early projects in my organisation and I have absolutely been in love 
              with it. My team-mates tend to call me the "OG Lambda Guy". <br />
              While my stronghold is in Python and it's frameworks, I also sometimes 
              dabble with Java and JavaScript.<br />
              When I am not busy building stuff, you can find me wasting the time away 
              binge watching new shows.
            </p>
            {/* <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div> */}
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
