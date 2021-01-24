import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="text-center pt-5 align-middle">
          <h1>¡Oh no!</h1>
          <p>No hemos encontrado el sitio al que intentaste navegar. <br></br> 
          Será mejor si regresamos al sitio principal. ¿Sale y vale?
          </p>
          <Button href="/" variant="dark">Regresar a Inicio</Button>{' '}
          <br></br>
          <img style={{width: "450px"}} className="mx-auto img-fluid pt-5" alt="404 not found" src={`../404.svg`}/>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
