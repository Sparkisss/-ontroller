import React from 'react';
import Button from '../components/UI/button/Button';

const MainPage = () => {
    return (
        <main className='mainPageWrapper'>
            <div className='controlState'>
                <div className='mode'>
                    <h3>Operating mode</h3>
                    <Button></Button>
                    <Button></Button>
                </div>
                <div className='state'>
                    <h3>State</h3>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
            <div className='infoOfObject'>
                <h2>Title of object</h2>
                <ul>
                    <li>work 1</li>
                    <li>work 2</li>
                    <li>work 3</li>
                </ul>
            </div>
            <div className='manageTool'>
                <h3>Control</h3>
                <ul>
                    <li>pump 1</li>
                    <li>pump 2 </li>
                    <li>sensor 1</li>
                    <li>sensor 2</li>
                </ul>
            </div>
            <div className='archive'>
                <h3>Archive of events</h3>
                <div>event 1</div>
                <div>event 2</div>
                <div>event 3</div>
            </div>
        </main>
    );
};

export default MainPage;