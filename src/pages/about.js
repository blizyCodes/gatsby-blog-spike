import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About me</h1>
        <p>I currently spike on interesting tech like Gatsby, woo!</p>
        <Link to="/contact">Want to work with me?</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
