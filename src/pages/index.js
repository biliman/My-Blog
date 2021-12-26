// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby tutorial</p>
      <StaticImage
        alt="Get ready for MMA"
        src="../images/new_me.jpg"
      />
    </Layout>
  )
}
    
// Step 3: Export your component
export default IndexPage
