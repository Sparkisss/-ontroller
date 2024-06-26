import React from 'react';

import Button from '../components/UI/button/Button';
import arrowLeft from '../source/icon/angle-square-left.svg';
import arrowRight from '../source/icon/angle-square-right.svg'
import { Link } from 'react-router-dom';

const AuthPage = () => {
    const countOfObject = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <main className='authPageWrapper'>
            <ul className='list'>
                {
                    countOfObject.map((object) => (
                    <Link key={object} to={`/main/${object}`}>
                        <li>Object number {object}</li>
                    </Link>
                    )
                )}
            </ul>
            <div className='arrowContain'>
                <Button className='custom-class'><img src={arrowLeft} alt="left" /></Button>
                <Button className='custom-class'><img src={arrowRight} alt="right" /></Button>                
            </div>
        </main>
    );
};

export default AuthPage;