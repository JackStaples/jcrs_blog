import * as React from 'react'
import { graphql } from 'gatsby'
import { ReactNode } from "react";
import Layout from '../../components/blocks/Layout'

const BlogPost: React.FC<{ children: ReactNode[] }> = ({ children }) => {

  return (
    <>
      <Layout>
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
      }
    }
  }
`
export default BlogPost