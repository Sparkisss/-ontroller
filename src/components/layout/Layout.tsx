import Header from '../UI/header/Header';
import { Outlet } from 'react-router';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Header />           
            <Outlet/>
        </>
    );
};

export default Layout;
