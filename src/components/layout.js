import React from "react"
import styled from "styled-components"


class Layout extends React.Component {
	render() {
		const { location, children } = this.props
		const rootPath = `${__PATH_PREFIX__}/`
		const blogPath = `${__PATH_PREFIX__}/blog/`
		
		if (location.pathname === rootPath || location.pathname === blogPath) {
			
		}
		return (
		<>
			<Wrapper>
				<div
				style={{
					marginLeft: `auto`,
					marginRight: `auto`,
				}}
				>
				<main>{children}</main>
				</div>
			</Wrapper>
			<Footer className="p-3 text-white" style={{backgroundColor: "#4C8F87", margin: "0px"}}>
			© {new Date().getFullYear()}, Nutrionaly. Todos los derechos reservados.
			{` `}
			</Footer>
		</>
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
