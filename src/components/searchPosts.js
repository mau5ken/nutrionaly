import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import { Card, CardColumns } from "react-bootstrap"
import { rhythm } from "../utils/typography"

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 0 auto ${rhythm(1)};
  width: 100%;
  height: 3rem;
  background: #fdfdfd;

  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const date = node.date
      const title = node.title || node.slug
      const description = node.description
      const excerpt = node.excerpt
      const slug = node.slug

      
      return (
        <div className="container" key={slug}>
          <h3
            
          >
            <Link style={{ boxShadow: `none` }} to={`/blog${slug}`}>
              {title}
            </Link>
          </h3>
          <small>{date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
          />
        </div>
      )

    })
  ) : (
    <h5 style={{ textAlign: "center" }}>
      <span role="img" aria-label="sad">😓</span>  No pudimos encontrar el contenido que buscas.
    </h5>
  )

const AllPosts = ({ posts }) => (
  <div className="container">
    <CardColumns>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Card className="shadow bg-white rounded">
                <Card.Body>
                  <Card.Title>
                    <Link style={{ boxShadow: `none` }} to={`/blog${node.fields.slug}`}>
                      {title}
                    </Link>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{node.frontmatter.date}</Card.Subtitle>
                  <Card.Text 
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  >
                  </Card.Text>
                  <Link style={{ boxShadow: `none` }} to={`/blog${node.fields.slug}`}>
                      Leer mas
                  </Link>
                </Card.Body>
              </Card>
            </div>
          )
      })}
      </CardColumns> 
  </div>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    JSON.parse(localSearchBlog.store)
  )

  return (
    <>
      <SearchBar className="container">
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search all posts"
          value={query}
          onChange={e => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
            )
            setQuery(e.target.value)
          }}
        />
      </SearchBar>
      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  )
}

export default SearchPosts
