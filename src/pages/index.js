import * as React from "react"
import "../styles/styles.scss"

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import Footer from "../components/footer"
import BlogGrid from "../components/blogGrid"
import ContactForm from "../components/ContactMe"


const IndexPage = () => (
  // <div>Hello</div>
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    {/* <BlogGrid /> */}
    {/* <ContactForm /> */}
    <Footer />
  </div>
)

export default IndexPage
