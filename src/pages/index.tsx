import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/Layout'
import type { HeadFC, PageProps } from "gatsby";

type Node = {
  id: number,
  frontmatter: {
    slug: string,
    date: string,
    title: string,
  }
}
type Data = {
  allMdx: {
    nodes: Node[]
  }
};


const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
