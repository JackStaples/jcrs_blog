import * as React from "react";
import {
    container,
    header,
} from "./Layout.module.css";
import { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Layout: React.FC<{ children: ReactNode[] }> = ({ children }) => {
    const data = useStaticQuery<{ allMdx: { nodes: { frontmatter: { slug: string } }[] } }>(graphql`
        query {
            allMdx(sort: {frontmatter: {date: DESC}}, limit: 1) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);
    return (<div className={container}>
        <div className={header}>
            <Link to='/'>Articles</Link>
            <h1>JCRS</h1>
            <Link to={`/blog/${data.allMdx.nodes[0].frontmatter.slug}`}>Most Recent</Link>
        </div>
        {children}
    </div>)
}

export default Layout;