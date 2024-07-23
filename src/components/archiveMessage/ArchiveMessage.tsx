import { FC, useEffect, useState } from 'react';
import { DataProps } from '../../types/types';

const ArchiveMessage: FC<DataProps> = ({ data, children }) => {
    const [messages, setMessages] = useState<{ message: string; timestamp: string }[]>([]);
    const [num, setNum] = useState<number>(0) //сщстояние для отслеживания номера сообщения
    const newData = data.split(" ").map(String);    
    // список возможных сообщений о состоягии объекта
    const getMessage = (event: string[]): string => { 
        for (let i = 0; i < event.length; i++) {            
            console.log(event[7]);
            if (event[7] === '1') return 'OK';
            if (event[8] === '1') return 'Atention';
            if (event[9] === '1') return 'Error';            
        }
        return 'In progress...'       
    };
    // отслеживаем изменения сщстояния объекта и выводим дату изменения, сообщение о характере изменения,
    // порядковый номер изменения
    useEffect(() => {
        const timestamp = new Date().toLocaleString(); //дата изменения
        
        const newMessage = getMessage(newData); //характер изменения        
        setMessages((prevMessages) => { // формируем массив данных со всеми харрактеристиками
            const updateMessage = [...prevMessages, { message: newMessage, timestamp }]
            if (updateMessage.length > 4) { 
                setNum(num + 1)
                updateMessage.shift();
            }
            console.log(data)
            return updateMessage //возвращаем сформированный массив
        });
    }, [data]);

    return (
        <>
            <h3>Archive of events: {children}</h3>
            {messages.map((msg, index) => (                           
                <div key={index}>
                     {msg.message ? `${index + num}: ${msg.message} --- ${msg.timestamp}` : null}
                </div>
            ))}
        </>
    );
};

export default ArchiveMessage;

