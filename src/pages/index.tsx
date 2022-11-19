import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/blocks/Layout'
import BlogContent from '../components/blocks/BlogContent'
import type { HeadFC, PageProps } from "gatsby";
import type { BlogInformation } from '../types/BlogInformation'

type Data = {
  allMdx: {
    nodes: BlogInformation[]
  }
};


const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <BlogContent id={node.id} frontmatter={node.frontmatter} />
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
