import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <h1>
      Hello from Nathan
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      My LinkedIn Page{" "}
      <a href="https://www.linkedin.com/in/nathananderson979797/">
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
