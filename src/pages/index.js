import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
class IndexPage extends React.Component {
	render() {
		return (
		<>
			<Header></Header>
			<Hero></Hero>
			<Layout location={this.props.location}>
			<SEO title="Nutrionaly" keywords={[`nutricion`, `nutrionaly`, `fitness`, `salud`]} />
			<About></About>
			<h1>Helooooo</h1>
			</Layout>
		</>
		)
	}
}

export default IndexPage
