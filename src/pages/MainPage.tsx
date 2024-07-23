import { useParams } from 'react-router';
import { io } from "socket.io-client"
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getUsers } from '../store/slices/userSlice';
import ArchiveMessage from '../components/archiveMessage/ArchiveMessage';
import ObjectState from '../components/objectState/ObjectState';
import { IUser, CoreCommand } from '../types/types';
import ManageTool from '../components/manageTool/ManageTool';
import ObjectInfo from '../components/objectInfo/ObjectInfo';

const MainPage: FC = () => {
    const params = useParams<{id: string}>();
    const [serverData, setServerData] = useState <string>('');
    
    const socket = io("http://localhost:8000")

    // Здесь можно задать разные значения для управления прибором
    const [coreCommands, setCoreCommands] = useState<CoreCommand[]>([
        { stand: '0', value: '0' }, // режим
        { stand: '1', value: '0' }, // насос 1
        { stand: '2', value: '0' }, // насос 2
    ]);

    socket.on('data', (data: string) => {           
        setServerData(data);                   
    });  

    const send = (mode: string, pump1: string, pump2: string) => {
        // Меняем значения coreCommands
        const newCoreCommands: CoreCommand[] = [
            { stand: '0', value: mode }, 
            { stand: '1', value: pump1 }, 
            { stand: '2', value: pump2 }, 
        ];
        setCoreCommands(newCoreCommands);
        // Отправляем команды на сервер
        newCoreCommands.forEach((command) => {
            socket.emit('LED_CONTROL', command)            
        });
        
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
                <ObjectState data={serverData} send={send} coreCommands={coreCommands}/>
            </div>
            <div className='infoOfObject'>
                <ObjectInfo info={info} workFirst={workFirst} workSecond={workSecond} workTheard={workTheard}/>
            </div>
            <div className='manageTool'>
                <ManageTool data={serverData}/>
            </div>
            <div className='archive'>
                <ArchiveMessage data={serverData}></ArchiveMessage>
            </div>
        </main>
    );
};

export default MainPage;