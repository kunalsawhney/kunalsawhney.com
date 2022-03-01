import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';



const Banner = () => {

    const data = useStaticQuery(graphql`
    query {
      squareButton: file(relativePath: { eq: "square-button.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      triangleButton: file(relativePath: { eq: "triangle-button.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crossButton: file(relativePath: { eq: "cross-button.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circleButton: file(relativePath: { eq: "circle-button.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                      <Fade left cascade>
                        Hi!<br/> I am Kunal
                      </Fade>
                    </div>
                    {/* <div className="side-image left">
                        <Img fluid={data.crossButton.childImageSharp.fluid} />
                    </div>
                    <div className="side-image mid-left">
                        <Img fluid={data.squareButton.childImageSharp.fluid} />
                    </div>
                    <div className="side-image mid-right">
                        <Img fluid={data.triangleButton.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.circleButton.childImageSharp.fluid} />
                    </div> */}
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
            <div className="fixed-misc">Developer and Solutions Engineer</div>
            <div className="fixed-misc">Developer and Solutions Engineer</div>
        </div>
    )
}

export default Banner;
