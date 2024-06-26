import React from 'react';
import Button from '../components/UI/button/Button';
import arrowLeft from '../source/icon/angle-square-left.svg';
import arrowRight from '../source/icon/angle-square-right.svg'

const AuthPage = () => {
    return (
        <main className='authPageWrapper'>
            <ul className='list'>
                <li>Object number 1</li>
                <li>Object number 2</li>
                <li>Object number 3</li>
                <li>Object number 4</li>
                <li>Object number 5</li>
                <li>Object number 6</li>
                <li>Object number 7</li>
                <li>Object number 8</li>
                <li>Object number 9</li>
                <li>Object number 10</li>
            </ul>
            <div className='arrowContain'>
                <Button className='custom-class'><img src={arrowLeft} alt="left" /></Button>
                <Button className='custom-class'><img src={arrowRight} alt="right" /></Button>                
            </div>
        </main>
    );
};

export default AuthPage;