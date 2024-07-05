import { Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import InfoPage from './pages/InfoPage';
import NotFound from './pages/NotFound';
import Modal from './components/modal/Modal';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<AuthPage/>}/>
                    <Route path="main/:id" element={<MainPage/>}/>
                    <Route path="info/:id" element={<InfoPage/>}/>
                    <Route path="auth" element={<Modal/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>                
            </Routes>
        </>
    );
}

export default App;

