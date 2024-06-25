import React from 'react';
import icon from '../../../source/icon/amd.svg';
import classes from './Header.module.css';
import Button from '../button/Button';

const Header = () => {
    return (
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
                    <Button>LOG IN</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;

