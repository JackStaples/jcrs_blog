import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

const BlogPost: React.FC<PageProps> = ({ data, children }) => {
  
  return (
    <>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
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