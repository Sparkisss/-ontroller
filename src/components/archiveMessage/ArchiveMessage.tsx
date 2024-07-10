import { FC, useEffect, useState } from 'react';
import { DataProps } from '../../types/types';

const ArchiveMessage: FC<DataProps> = ({ data, children }) => {
    const [messages, setMessages] = useState<{ message: string; timestamp: string }[]>([]);

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

    useEffect(() => {
        const timestamp = new Date().toLocaleString(); 
        const newMessage = getMessage(data);
        setMessages((prevMessages) => [...prevMessages, { message: newMessage, timestamp }]);
    }, [data]);

    return (
        <>
            <h3>Archive of events: {children}</h3>
            {messages.map((msg, index) => (
                <div key={index}>
                    {msg.message} - {msg.timestamp}
                </div>
            ))}
        </>
    );
};

export default ArchiveMessage;

