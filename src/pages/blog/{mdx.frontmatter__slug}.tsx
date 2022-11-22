import * as React from 'react'
import { graphql } from 'gatsby'
import { ReactNode } from "react";
import Layout from '../../components/blocks/Layout'
import Quote from '../../components/blocks/Quote'

const BlogPost: React.FC<{ children: ReactNode[], data: { mdx: { frontmatter: { quote: string, attribution: string, citation: string } } } }> = ({ children, data }) => {

  return (
    <>
      <Layout>
        <Quote quote={data.mdx.frontmatter.quote} attribution={data.mdx.frontmatter.attribution} citation={data.mdx.frontmatter.citation} />
        {children}
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        quote
        attribution
        citation
      }
    }
  }
`
export default BlogPost