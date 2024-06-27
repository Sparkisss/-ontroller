import React from 'react';
import { Link } from "react-router-dom"
import { useState } from 'react'
import icon from '../../../source/icon/amd.svg';
import classes from './Header.module.css';
import Button from '../button/Button';
import Modal from '../../modal/Modal'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
      setIsOpen(!isOpen)
    }
    
    return (
        <>
        {isOpen ? <Modal/> : null}
        <header>
            <div className={classes.contain}>
                <div className={classes.icon}>
                    <img src={icon} alt="label" />
                </div>
                <div className={classes.routhButton}>
                    
                    <Button>MAIN</Button>
                    <Button>INFO</Button>
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

