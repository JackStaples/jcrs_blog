import * as React from "react";
import { Link } from "gatsby";
import { secondary } from './BlogContent.module.css'
import type { BlogInformation } from '../../types/BlogInformation'


const BlogContent = ({ id, frontmatter, body }: BlogInformation) => {
    const words = body.split(' ');
    return (
        <article key={id}>
            <h2>
                <Link to={`/blog/${frontmatter.slug}`}>
                    {frontmatter.title}
                </Link>
            </h2>
            <p className={secondary}>{frontmatter.date} • {words.length} words</p>
            <p>{frontmatter.tag}</p>
        </article>)
}

export default BlogContent;