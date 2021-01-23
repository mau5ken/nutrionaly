import React from "react"
import Header from "../components/Header"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        
        const siteTitle = "Contacto"
        return(
            <>
                <Header></Header>
                <Layout location={this.props.location} title={siteTitle}>
                <SEO title="Contacto" />
                </Layout>
            </>
        )
    }
}

export default Contact