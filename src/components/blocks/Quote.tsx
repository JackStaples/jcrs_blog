import * as React from "react";
import { quoteDiv } from './Quote.module.css'

const Quote = ({ quote, attribution, citation }: { quote: string, attribution: string, citation: string }) => {
    return (
        <figure className={quoteDiv}>
            <blockquote>
                <p><em>{quote}</em></p>
            </blockquote>
            <figcaption>-{attribution}{citation ?(<cite>,{citation}</cite>) : (<></>)}</figcaption>
        </figure>
    )
}

export default Quote;