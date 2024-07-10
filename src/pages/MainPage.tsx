import { useParams } from 'react-router';
import { io } from "socket.io-client"
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getUsers } from '../store/slices/userSlice';
import ArchiveMessage from '../components/archiveMessage/ArchiveMessage';
import ObjectState from '../components/objectState/ObjectState';
import { IUser } from '../types/types';

const MainPage: FC = () => {
    const params = useParams<{id: string}>()

    const [serverData, setServerData] = useState <string | number>('');
    const socket = io("http://localhost:8000")

    socket.on('data', (data) => {
        setServerData(data)
    });
    
    const send = (command: string | number) => {
        socket.emit('command', command)
        console.log(command)
    }

    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.user.data)
    const [info, setInfo] = useState('...')
    const [workFirst, setWorkFirst] = useState('...')
    const [workSecond, setWorkSecond] = useState('...')
    const [workTheard, setWorkTheard] = useState('...')

    useEffect(() => {
        dispatch(getUsers())
        getTitle(users, params.id)        
    }, [])

    const getTitle = (users:IUser[], num: any): void => {
        users.map((user) => {
            if (user.id == num){
                setInfo(`${user.address.city}-${user.address.street}-${user.address.suite}`)
                setWorkFirst(`${user.company.name}`)
                setWorkSecond(`${user.company.catchPhrase}`)
                setWorkTheard(`${user.company.bs}`)
            }
        }        
    )}     

    return (
        <main className='mainPageWrapper'>
            <div className='controlState'>      
                <ObjectState data={serverData} send={send}/>
            </div>
            <div className='infoOfObject'>
                <h2>{info}</h2>
                <ul>
                    <li>{workFirst}</li>
                    <li>{workSecond}</li>
                    <li>{workTheard}</li>
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
                <ArchiveMessage data={serverData}>
                    Notification
                </ArchiveMessage>
            </div>
        </main>
    );
};

export default MainPage;