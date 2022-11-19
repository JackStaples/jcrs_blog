import * as React from "react";
import {
    container
} from "./Layout.module.css";
import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode[] }> = ({ children }) => {
    return (<div className={container}>
        {children}
    </div>)
}

export default Layout;