import {Fragment, ReactNode} from "react";
import Navbar from "./navbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <Fragment>
                {children}
            </Fragment>
            <footer></footer>
        </Fragment>
    )
}