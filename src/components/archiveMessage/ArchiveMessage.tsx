import { FC, useEffect, useState } from 'react';
import { DataProps } from '../../types/types';

const ArchiveMessage: FC<DataProps> = ({ data, children }) => {
    const [messages, setMessages] = useState<{ message: string; timestamp: string }[]>([]);
    const [num, setNum] = useState<number>(0) //сщстояние для отслеживания номера сообщения   
    // список возможных сообщений о состоягии объекта
    const getMessage = (event: string | number) => { 
        switch (event) {
            case '1':
                return "Standby mode";
            case '2':
                return "Normal operation: one pump";
            case '3':
                return "Normal operation: two pumps";
            case '4':
                return "Warning: high level";
            case '5':
                return "Error: triggering of the protective sensor";
            default:
                return "";
        }
    };
    // отслеживаем изменения сщстояния объекта и выводим дату изменения, сообщение о характере изменения,
    // порядковый номер изменения
    useEffect(() => {
        const timestamp = new Date().toLocaleString(); //дата изменения
        const newMessage = getMessage(data); //характер изменения
        setMessages((prevMessages) => { // формируем массив данных со всеми харрактеристиками
            const updateMessage = [...prevMessages, { message: newMessage, timestamp }]
            if (updateMessage.length > 4) { 
                setNum(num + 1)
                updateMessage.shift();
            }
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

