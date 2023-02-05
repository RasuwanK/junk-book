import {Fragment, ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <Fragment>
            <header>
            </header>
            <Fragment>
                {children}
            </Fragment>
            <footer></footer>
        </Fragment>
    )
}