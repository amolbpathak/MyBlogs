import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <h1>This is React gatsby, how are you?</h1>
      <p>
        <Link to="/contact">Need developer</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
