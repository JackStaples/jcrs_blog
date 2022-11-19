import * as React from "react";
import { Link } from "gatsby";
import { header } from './BlogContent.module.css'
import type { BlogInformation } from '../../types/BlogInformation'


const BlogContent = ({ id, frontmatter }: BlogInformation) => {
    return (
        <article key={id}>
            <h2 className={header}>
                <Link to={`/blog/${frontmatter.slug}`}>
                    {frontmatter.title}
                </Link>
            </h2>
            <p>{frontmatter.date}</p>
        </article>)
}

export default BlogContent;