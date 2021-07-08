import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.mdx
		const siteTitle = this.props.data.site.siteMetadata.title
		const { previous, next } = this.props.pageContext

		return (
			<>
			<Header></Header>
				<Layout location={this.props.location} title={siteTitle}>
					<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
				<div className="container">
					<h2>{post.frontmatter.title}</h2>
					<p
					style={{
						display: `block`,
					}}
					>
						{post.frontmatter.date}
					</p>
					<div className="dropdown-divider"></div>

					
					<MDXRenderer>{post.body}</MDXRenderer>
				

					<hr
					style={{
					}}
					/>

					<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
					>
						<li className="center">
							<p>Blog Anterior</p>
							{previous && (
							<Link to={`/blog${previous.fields.slug}`} rel="prev">
								← {previous.frontmatter.title}
							</Link>
							)}
						</li>
						<li>
							<p>Blog Siguiente</p>
							{next && (
							<Link to={`/blog${next.fields.slug}`} rel="next">
								{next.frontmatter.title} →
							</Link>
							)}
						</li>
					</ul>

					<hr
					style={{
					}}
					/>
				

					<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
					>
						<li className="center">
							<h5>No olvides compartirlo <span role="img" aria-label="share">🍎 ✨</span></h5>
						</li>
						<li>
							
						</li>
					</ul>
				</div>

			</Layout>
			</>
		)
  	}
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
