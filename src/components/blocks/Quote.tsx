import * as React from "react";
import { quoteDiv } from './Quote.module.css'

const Quote = ({ quote, attribution, citation }: { quote: string, attribution: string, citation: string }) => {
    return (
        <figure className={quoteDiv}>
            <blockquote>
                <p>{quote}</p>
            </blockquote>
            <figcaption>-{attribution}, <cite>{citation}</cite></figcaption>
        </figure>
    )
}

export default Quote;