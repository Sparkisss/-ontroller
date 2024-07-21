import {FC} from 'react';
import Button from '../UI/button/Button';
import { DataProps } from '../../types/types';

const ObjectState: FC<DataProps> = ({data, send} :DataProps) => {
    return (
        <>
            <div className='mode'>
                <h3>Mode: {data}</h3>
                <Button onClick={() => send(1, 1, 1)}>Auto</Button>
                <Button onClick={() => send(0, 0, 0)}>Man.</Button>
            </div>
            <div className='state'>
                <h3>State:</h3>
                <div className='divContain'>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default ObjectState;