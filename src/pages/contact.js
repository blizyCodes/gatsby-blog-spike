import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <p>
          The best way to reach me is via{" "}
          <a
            href="https://github.com/donblizy"
            target="_blank"
            rel="noreferrer"
          >
            email
          </a>{" "}
          or by saying donblizy 3 times in front of your mirror at 23:52.
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
