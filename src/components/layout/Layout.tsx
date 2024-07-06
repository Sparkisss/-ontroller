import Header from '../UI/header/Header';
import Footer from '../UI/footer/Footer'
import { Outlet } from 'react-router';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Header />           
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;
