import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useParams } from 'react-router';
import icon from '../../../source/icon/amd.svg';
import classes from './Header.module.css';
import Button from '../button/Button';
import Modal from '../../modal/Modal'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLog, setIsLog] = useState(false)
    const params = useParams<{id: string}>()

    const toggleModal = () => {
        setIsOpen(!isOpen)
        setUser(!isOpen)      
    }

    const setUser = (data: boolean) => {
        if (data) {
            setIsLog(true)
        }else setIsLog(false)
    }

    return (
        <>
        {isOpen ? <Modal/> : null}
        <header>            
            <div className={classes.contain}>
                <div className={classes.icon}>
                <Link to="/"><img src={icon} alt="label" /></Link>
                </div>
                <div className={classes.routhButton}>
                    {isLog ?
                        <>
                            <Link to={`main/${params.id}`}><Button>MAIN</Button> </Link>              
                            <Link to={`info/${params.id}`}><Button>INFO</Button> </Link>
                        </>
                        : null
                    }                                  
                </div>
                <div className={classes.auth}>
                    <Button onClick={toggleModal}>LOG IN</Button>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;

