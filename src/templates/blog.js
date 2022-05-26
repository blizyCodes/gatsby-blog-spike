import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/Head"
export const query = graphql`
  query SingleContentFulBlogData($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
          }
        }
      }
    }
  }
`

const Blog = props => {
  const {
    contentfulBlogPost: {
      title,
      slug,
      publishedDate,
      body: { raw, references },
    },
  } = props.data
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id
        const {
          file: { url },
          title,
        } = references.find(({ contentful_id: id }) => {
          return id === imageID
        })

        return <img src={url} alt={title} />
      },
    },
  }
  const rawBlogPostObject = JSON.parse(raw)
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(rawBlogPostObject, options)}
    </Layout>
  )
}

export default Blog
