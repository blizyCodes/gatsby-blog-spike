import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Nondas, a developer. </h2>
      <p>
        Need a developer or a dark pun? <Link to="/contact"> Click here</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
