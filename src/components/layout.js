import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"


class Layout extends React.Component {
	render() {
		const { location, children } = this.props
		const rootPath = `${__PATH_PREFIX__}/`
		const blogPath = `${__PATH_PREFIX__}/blog/`
		
		if (location.pathname === rootPath || location.pathname === blogPath) {
			
		}
		return (
		<Wrapper>
			<div
			style={{
				marginLeft: `auto`,
				marginRight: `auto`,
				maxWidth: rhythm(40),
				padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
			}}
			>
			<main>{children}</main>
			</div>
			<Footer>
			© {new Date().getFullYear()}, Nutrionaly. Todos los derechos reservados.
			{` `}
			</Footer>
		</Wrapper>
		)
  	}
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
