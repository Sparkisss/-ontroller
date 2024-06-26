import React from 'react';
import Button from '../components/UI/button/Button';

const InfoPage = () => {
    return (
        <main className='mainInfoWrapper'>
            <div className='listOfEquipment'>
                <h3>Equipment in place</h3>
                <ul>
                    <li>pump one</li>
                    <li>pump two</li>
                    <li>sensor one</li>
                    <li>sensor two</li>
                </ul>
            </div>
            <div className='slider'>
                <div>Slider</div>
            </div>
            <div className='todoTask'>
                <h3>List of tasks</h3>
                <Button></Button>
                <Button></Button>
                <ul>
                    <li>task 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                </ul>
            </div>
        </main>
    );
};

export default InfoPage;