import { useParams } from 'react-router';
import Button from '../components/UI/button/Button';
import { io } from "socket.io-client"
import { useState } from 'react';

const MainPage = () => {
    const params = useParams<{id: string}>()

    const [serverData, setServerData] = useState('')
    const socket = io("http://localhost:8000")

    socket.on('data', (data) => {
        setServerData(data)
    });
    
    const send = (command: any) => {
        socket.emit('command', command)
        console.log(command)
    }

    return (
        <main className='mainPageWrapper'>
            <div className='controlState'>
                <div className='mode'>
                    <h3>Mode: {serverData}</h3>
                    <Button onClick={() => send(1)}>Auto</Button>
                    <Button onClick={() => send(5)}>Man.</Button>
                </div>
                <div className='state'>
                    <h3>State:</h3>
                    <div className='divContain'>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='infoOfObject'>
                <h2>Object {params.id}</h2>
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