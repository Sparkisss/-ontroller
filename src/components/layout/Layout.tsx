import React, {ReactNode} from 'react';
import Header from '../UI/header/Header';
import "./Layout.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;