import * as React from "react";
import { Link } from "gatsby";
import { header } from './BlogContent.module.css'
import type { BlogInformation } from '../../types/BlogInformation'


const BlogContent = ({ id, frontmatter, body }: BlogInformation) => {
    const words = body.split(' ');
    return (
        <article key={id}>
            <h2 className={header}>
                <Link to={`/blog/${frontmatter.slug}`}>
                    {frontmatter.title}
                </Link>
            </h2>
            <p>{frontmatter.date} • {words.length} words</p>
        </article>)
}

export default BlogContent;